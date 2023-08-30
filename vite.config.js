import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gesztenyepure/', // Replace 'your-repo-name' with your actual GitHub repository name
  plugins: [react()],
  server: {
    headers: {
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    }
  }
});
