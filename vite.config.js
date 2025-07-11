import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '97051362-5bb4-4d12-a98e-a5f92b7783a1-00-p45sgmpg1dv8.sisko.replit.dev'
    ]
  }
})
