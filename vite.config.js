import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/react-portofolio-rizky-fadillah/",
  plugins: [
    tailwindcss(),
  ],
})