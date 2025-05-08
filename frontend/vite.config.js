import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Faz com que o Vite seja acessível de fora do container
    port: 5173,        // Porta padrão do Vite
  },
})
