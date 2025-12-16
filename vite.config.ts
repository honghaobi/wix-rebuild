import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  // GitHub Pages serves project sites from `/<repo>/`.
  // This makes `npm run build` work locally and on GitHub Actions.
  const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]

  return {
    base: isGithubActions && repo ? `/${repo}/` : '/',
    plugins: [react()],
  }
})
