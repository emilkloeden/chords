<script>
	export let totalSize;
	export let language;
	const { size, node } = language;
	const { name, color } = node;
	const percent = ((size / totalSize) * 100).toFixed(2);
</script>

<table>
	<thead />
	<tbody>
		<tr>
			<th>Language</th>
			<td>{name}</td>
		</tr>
		<tr>
			<th>Color</th>
			<td>{color}</td>
		</tr>
		<tr>
			<th>Size</th>
			<td>{size}</td>
		</tr>
		<tr>
			<th>Total size</th>
			<td>{totalSize}</td>
		</tr>
		<tr>
			<th>Percent</th>
			<td>{percent}%</td>
		</tr>
	</tbody>
</table>
