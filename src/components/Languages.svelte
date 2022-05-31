<script>
	export let totalSize;
	export let languages;
	const langs = languages.map((language) => {
		const { size, node } = language;
		const { name, color } = node;
		const percent = ((size / totalSize) * 100).toFixed(2);
		return {
			name,
			color,
			size,
			percent
		};
	});

	langs.sort(function (a, b) {
		return a.size < b.size;
	});
</script>

<div class="language-bar">
	{#each langs as { name, color, percent }}
		<span
			class="language-bar-segment"
			data-language={name}
			data-color={color}
			style={`background-color: ${color}; width: ${percent}%`}
		/>
	{/each}
</div>

<style>
	.language-bar {
		margin: auto auto 1rem;
		width: 80%;
		height: 0.8rem;
		background-color: black;
		display: flex;
		justify-content: center;
	}
	.language-bar-segment {
		display: block;
	}
	.language-bar-segment::before {
		content: attr(data-language);
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		position: absolute;
		transform: translateY(1rem);
		z-index: 10;
		font-size: 0.8rem;

		opacity: 0;
		transition: 0.3s opacity;
	}
	.language-bar-segment:hover::before {
		background-color: attr(data-color);
		opacity: 1;
	}
</style>
