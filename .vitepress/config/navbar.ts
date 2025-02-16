import { navbar } from 'vuepress-theme-hope'

const navbarZh = navbar([
  { text: '首页', link: '/', icon: 'home' },
  { text: '指南', link: '/guide/README.md', icon: 'lightbulb' },
  { text: '常见问题', link: '/faq.md', icon: 'circle-question' },
  {
    text: 'QQ群',
    link: 'https://jq.qq.com/?_wv=1027&k=9Xs1RMt5',
    icon: 'fa-brands fa-qq'
  }
])

export { navbarZh }