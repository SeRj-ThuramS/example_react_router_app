import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	root: 'src',
	publicDir: 'src/public',
	build: {
		outDir: '../dist', // Output the build files to the 'dist' folder
		rollupOptions: {
			input: 'src/index.html', // Specify the custom entry point
		},
	},
	
})
