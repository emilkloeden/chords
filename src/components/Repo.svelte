<script>
	import GitHubRepoLink from './GitHubRepoLink.svelte';
	import Languages from './Languages.svelte';
	export let name;
	export let description;
	export let url;
	export let homepageUrl;
	export let languages;
	export let primaryLanguage;
	const { totalSize } = languages;
	const { color: primaryLanguageColor } = primaryLanguage;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Space+Mono&display=optional"
		rel="stylesheet"
	/>
</svelte:head>

<div class="card">
	<div class="card-inner">
		<div class="card-front">
			<a href={homepageUrl}
				><img
					class="screenshot"
					src={`${url}/raw/main/screenshot.png`}
					alt="Screenshot of '{name}'"
				/></a
			>
		</div>
		<div class="card-back">
			<h1>{name}</h1>
			<p>{description}</p>
			<p>
				<em>Source code:</em>
			</p>
			<div style="text-align: center;">
				<GitHubRepoLink color={primaryLanguageColor} {url} {name} />
			</div>
			<p><em>Languages:</em></p>
			<Languages languages={languages.edges} {totalSize} />
		</div>
	</div>
</div>

<style>
	h1,
	p {
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
	h1 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
		text-align: center;
	}
	p {
		line-height: 1.5rem;
		margin: 1rem;
	}
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.4);
		background-color: white;

		border-radius: 1rem;
		transition: transform 0.4s;

		height: 100%;
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		padding: 20px;
	}
	.card:hover {
		transform: translateY(-3px) scale(1.05);
		box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.2);
	}

	.screenshot {
		width: 200px;
		height: 220px;
	}
</style>
