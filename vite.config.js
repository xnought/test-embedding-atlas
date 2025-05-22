import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
	base: "/test-embedding-atlas/",
	plugins: [svelte()],
	//  huh? comment this out and generating clusters works in `pnpm dev`
	// otherwise doesn't work
	// optimizeDeps: {
	// 	exclude: ["embedding-atlas"],
	// },
});
