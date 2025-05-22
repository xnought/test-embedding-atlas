<script>
	import * as vg from "@uwdata/vgplot";
	import { EmbeddingAtlas } from "embedding-atlas/svelte";

	const fetched = $derived.by(async () => {
		vg.coordinator().databaseConnector(vg.wasmConnector());
		await vg.coordinator().exec(vg.loadParquet("demo", "https://apple.github.io/embedding-atlas/demo/data/dataset.parquet"));

		// print out the columns real fast (for debugging)
		const out = await vg.coordinator().query("describe demo");
		for (const col of out) {
			console.log(col);
		}
	});
</script>

<main style:height="800px">
	{#await fetched}
		<p>Loading...</p>
	{:then}
		<EmbeddingAtlas
			coordinator={vg.coordinator()}
			table="demo"
			projectionColumns={{ x: "projection_x", y: "projection_y" }}
			idColumn="_row_index"
			textColumn="description"
			automaticLabels={true}
		/>
	{:catch e}
		<p>Failed to load data: {e.message}</p>
	{/await}
</main>

<style>
</style>
