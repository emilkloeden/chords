<script context="module">
	export const load = async ({ fetch }) => {
		try {
			const res = await fetch('/query/repos.json', {
				method: 'GET',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const repos = await res.json();

			return {
				props: {
					repos
				}
			};
		} catch (error) {
			console.error(`Error in load function for /: ${error}`);
			return;
		}
	};
</script>

<script>
	import Repo from '../components/Repo.svelte';
	export let repos;
</script>

<svelte:head>
	<title>Chords!</title>

	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		body {
			width: 100%;
			min-height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 150px;
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
				Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		}
	</style>
</svelte:head>

<div class="banner">
	<h1>Chords!</h1>
	<p>
		The same site developed using different front-end frameworks, "meta-frameworks" and techniques.
	</p>
	<p>
		From static-site-generation to server-side rendering and scoped CSS to serverless functions each
		site comprises three pages:
	</p>
	<ul>
		<li>🏠 a home page</li>
		<li>👨‍🎤️ an artist page</li>
		<li>🎸 and a song page</li>
	</ul>
	<p>
		<em> (The song page is where the magic </em> 🧚
		<em>
			happens displaying the lyrics to a song with the chords a top words to indicate timing.
			Hovering over a chord displays its shape showing the viewer how to play it).
		</em>
	</p>
</div>

<div class="card-list">
	{#each repos as { name, description, url, homepageUrl, languages, primaryLanguage }}
		<Repo {name} {description} {url} {homepageUrl} {languages} {primaryLanguage} />
	{/each}
</div>

<!-- <div class="footer">
	<p><em>This</em> site was made using SvelteKit with data pulled from the GitHub GraphQL API.</p>
</div> -->
<style>
	.banner {
		align-items: center;
		justify-content: center;
		margin-bottom: 2rem;
	}
	.banner h1,
	p,
	ul {
		text-align: center;
	}
	.banner h1 {
		font-size: 3rem;
	}
	.banner p {
		font-size: 1.2rem;
		line-height: 2.4rem;
	}
	.banner em {
		font-size: 1rem;
	}
	.banner ul {
		font-size: 1.2rem;
		list-style: none;
	}

	.card-list {
		width: 70%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 4em;
		background-color: white;
		margin: 0 auto;
	}

	.footer {
		text-align: center;
		background-color: aqua;
	}
</style>
