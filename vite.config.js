import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        base: '/React-Sandbox/',
        server: {
            port: 3000,
        },
        build: {
            outDir: 'build',
        },
        plugins: [react()],
    };
});