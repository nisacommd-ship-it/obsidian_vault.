// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ecocase.md',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: { responsiveStyles: true },
});
