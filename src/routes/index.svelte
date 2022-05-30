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
</svelte:head>
<div class="card-list">
	{#each repos as { name, description, url, homepageUrl, languages, primaryLanguage }}
		<Repo {name} {description} {url} {homepageUrl} {languages} {primaryLanguage} />
	{/each}
</div>

<style>
	.card-list {
		width: 70%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 4em;
		background-color: white;
		margin: 0 auto;
	}
</style>
