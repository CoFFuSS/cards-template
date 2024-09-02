import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';

import { resolve } from 'path';

const fullReloadAlways: PluginOption = {
  name: 'full-reload-always',
  handleHotUpdate({ server }) {
    server.ws.send({ type: 'full-reload' });

    return [];
  },
} satisfies PluginOption;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react(), fullReloadAlways],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/globals.scss";
          @import "./src/styles/utils.scss";
          @import "./src/styles/vars.scss";
        `,
      },
    },
  },
});
