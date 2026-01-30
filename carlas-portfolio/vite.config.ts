import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from "vite-tsconfig-paths"
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),

    // {
    //   name: 'markdown-loader',
    //   transform(code, id) {
    //     if (id.slice(-3) === '.md') {
    //       return `export default ${JSON.stringify(code)};`
    //     }
    //   },
    // },
  ]
  // .filter(Boolean),
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
  
});
