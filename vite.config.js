import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', '127.0.0.1', "43432e968c95.ngrok-free.app"],
    fs: {
      strict: false,
    }
  }
})
