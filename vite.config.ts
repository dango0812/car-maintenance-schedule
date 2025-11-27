/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    resolve: {
        alias: {
            src: path.resolve(dirname, 'src'),
            constants: path.resolve(dirname, 'src/constants'),
            components: path.resolve(dirname, 'src/components'),
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
    test: {
        projects: [
            {
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                    }),
                ],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright({}),
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                    },
                    setupFiles: ['.storybook/vitest.setup.ts'],
                },
            },
        ],
    },
});
