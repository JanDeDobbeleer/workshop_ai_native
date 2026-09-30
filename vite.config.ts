import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { deckAgentPlugin } from './server/deckAgentPlugin'

export default defineConfig({
  plugins: [react(), deckAgentPlugin()],
  base: './',
})
