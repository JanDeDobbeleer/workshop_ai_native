import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { deckAgentPlugin } from './server/deckAgentPlugin'

export default defineConfig(({ mode }) => {
  // Fail closed: a production build without a password hash would ship a gate nobody can pass.
  if (mode === 'production') {
    const env = loadEnv(mode, process.cwd(), 'VITE_')
    if (!env.VITE_WORKSHOP_PASSWORD_HASH) {
      throw new Error('VITE_WORKSHOP_PASSWORD_HASH is required for production builds.')
    }
  }

  return {
    plugins: [react(), deckAgentPlugin()],
    base: './',
  }
})
