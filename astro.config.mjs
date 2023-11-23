import { defineConfig } from 'astro/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import * as path from 'path'

const folders = [
    '',
    'assets',
    'components',
    'models',
    'pages',
    'services',
    'styles'
]

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [vanillaExtractPlugin()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }
})
