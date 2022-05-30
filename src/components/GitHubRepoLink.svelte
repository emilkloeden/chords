<script>
	import GitHubIcon from './GitHubIcon.svelte';
	export let url;
	export let name;
	export let color;
</script>

<a href={url} data-color={color}>
	<GitHubIcon {color} {name} /><br />
	<span>GitHub</span>
</a>

<style>
	* {
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
	a {
		text-decoration: none;
	}
	a:hover span {
		border-bottom: 1px dashed black;
	}
	a:visited {
		color: black;
		opacity: 0.5;
	}
</style>
