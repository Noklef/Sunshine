import fs from 'fs';
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { codecovVitePlugin } from "@codecov/vite-plugin";
import vue from '@vitejs/plugin-vue'
import process from 'process'

/**
 * The Web UI is a single-page Vue application (vue-router, history mode).
 * Vite builds the single `index.html` entry point; the C++ server serves that
 * shell as a fallback for unmatched GET routes so client-side routing works.
 */
let assetsSrcPath = 'src_assets/common/assets/web';
let assetsDstPath = 'build/assets/web';

if (process.env.SUNSHINE_BUILD_HOMEBREW) {
    console.log("Building for homebrew, using default paths")
}
else {
    // If the paths supplied in the environment variables contain any symbolic links
    // at any point in the series of directories, the entire build will fail with
    // a cryptic error message like this:
    //     RollupError: The "fileName" or "name" properties of emitted chunks and assets
    //     must be strings that are neither absolute nor relative paths.
    // To avoid this, we resolve the potential symlinks using `fs.realpathSync` before
    // doing anything else with the paths.
    if (process.env.SUNSHINE_SOURCE_ASSETS_DIR) {
        let path = resolve(fs.realpathSync(process.env.SUNSHINE_SOURCE_ASSETS_DIR), "common/assets/web");
        console.log("Using srcdir from Cmake: " + path);
        assetsSrcPath = path;
    }
    if (process.env.SUNSHINE_ASSETS_DIR) {
        let path = resolve(fs.realpathSync(process.env.SUNSHINE_ASSETS_DIR), "assets/web");
        console.log("Using destdir from Cmake: " + path);
        assetsDstPath = path;
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    // History-mode routing needs absolute asset URLs so deep links (e.g. /config) load correctly.
    base: '/',
    plugins: [
        vue(),
        // The Codecov vite plugin should be after all other plugins
        codecovVitePlugin({
            enableBundleAnalysis: true,
            bundleName: "sunshine",
            uploadToken: process.env.CODECOV_TOKEN,
            gitService: "github",
        }),
    ],
    root: resolve(assetsSrcPath),
    build: {
        outDir: resolve(assetsDstPath),
    },
})
