import { hopeTheme } from 'vuepress-theme-hope'
import { navbarZh } from './navbar'

export default hopeTheme({
  iconAssets: 'fontawesome-with-brands',
  repo: 'alazeprt/AQQBot',
  docsRepo: 'alazeprt/AQQBot-Docs',
  docsDir: '/',
  locales: {
    '/': {
      navbar: navbarZh
    }
  }
})