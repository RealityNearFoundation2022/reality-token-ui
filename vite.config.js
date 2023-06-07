import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import inject from '@rollup/plugin-inject'

import GlobalPolyFill from "@esbuild-plugins/node-globals-polyfill";

import { resolve } from "path";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";



// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window',
    'process.env': {}
  },
  optimizeDeps: {
    esbuildOptions: {
        define: {
            global: "globalThis",
        },
        plugins: [
            GlobalPolyFill({
                process: true,
                buffer: true,
            }),
        ],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util",
      Buffer: 'buffer', // Redirige todas las importaciones de "Buffer" a "buffer" 
    },
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
			plugins: [inject({ Buffer: ['Buffer', 'Buffer'] })],
      external: ['Buffer'],
		},
  },
})
