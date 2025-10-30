import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
            routesDirectory: path.resolve(dirname, 'src/routes'),
        }),
        react(),
        svgr({
            svgrOptions: { icon: true },
        }),
    ],
    resolve: {
        alias: {
            src: path.resolve(dirname, 'src'),
            constants: path.resolve(dirname, 'src/constants'),
            components: path.resolve(dirname, 'src/components'),
            common: path.resolve(dirname, 'src/components/common'),
            base: path.resolve(dirname, 'src/components/base'),
            pages: path.resolve(dirname, 'src/pages'),
            hooks: path.resolve(dirname, 'src/hooks'),
            utils: path.resolve(dirname, 'src/utils'),
            assets: path.resolve(dirname, 'src/assets'),
            apis: path.resolve(dirname, 'src/apis'),
            stores: path.resolve(dirname, 'src/stores'),
            styles: path.resolve(dirname, 'src/styles'),
            models: path.resolve(dirname, 'src/models'),
        },
    },
});
