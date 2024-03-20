import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        icon: 'https://www.google.com/s2/favicons?domain=linux.do',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://linux.do/*'],
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr('ReactDOM', 'umd/react-dom.production.min.js'),
        },
      },
    }),
  ],
});
