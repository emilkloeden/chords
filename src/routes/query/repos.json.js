export const get = async (req) => {
    try {
        const query = `
        query($limit: Int) { 
            viewer { 
                repositories(first: $limit, orderBy: {
                    field: NAME, direction: ASC
                }) {
                    nodes {
                        name
                        object(expression: "main:README.md") {
                            ... on Blob {
                            text
                            }
                        }
                        nameWithOwner
                        description
                        url
                        homepageUrl
                        primaryLanguage {
                            name
                            color
                        }
                        languages(first: 5) {
                            totalSize
                            edges {
                                size
                                node {
                                    name
                                    color
                                }
                            }
                        }
                        licenseInfo {
                            name
                        }
                    }
                }
            }
        }`
        const variables = {
            limit: 20
        }

        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${process.env['GH_PAT']}`
            },
            body: JSON.stringify({
                query,
                variables
            })
        })

        const { data } = await res.json()
        const repos = data.viewer.repositories.nodes.filter((repo) => /^chords-.+/.test(repo.name));

        return {
            body: JSON.stringify(repos)
        }

    } catch (e) {
        const error = `Error in Graphql query: ${e}`
        console.error(error)
        return {
            status: 500,
            error
        }
    }
}