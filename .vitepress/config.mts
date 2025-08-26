import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AQQBot 文档",
  description: "AQQBot 插件官方文档",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alazeprt/AQQBot' }
    ]
  },
  srcDir: "./src",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        sidebar: [
          { text: '简介', link: '/docs/zh/description' },
          {
            text: 'OneBot 11 后端安装并配置',
            items: [
              { text: '概述 & 提醒', link: '/docs/zh/dependencies/remind'},
              { text: 'QQ 本体', link: '/docs/zh/dependencies/qq'},
              { text: '有头后端前置 LiteLoaderQQNT', link: '/docs/zh/dependencies/liteloaderqqnt' },
              { text: '后端 LLoneBot', link: '/docs/zh/dependencies/llonebot' },
              { text: '后端 NapCat', link: '/docs/zh/dependencies/napcat' },
              { text: '后端 Lagrange', link: '/docs/zh/dependencies/lagrange' }
            ]
          },
          {
            text: '基础用法',
            items: [
              { text: '安装', link: '/docs/zh/basic/installation' },
              { text: 'QQ 群默认命令', link: '/docs/zh/basic/qq-usage' },
              { text: '游戏内默认命令及权限', link: '/docs/zh/basic/game-usage' }
            ]
          },
          {
            text: '常用功能配置',
            items: [
              { text: '白名单/绑定功能', link: '/docs/zh/config/whitelist'},
              { text: '信息查询功能', link: '/docs/zh/config/information' },
              { text: '聊天互通/群服互联功能', link: '/docs/zh/config/chat' },
              { text: '群内播报/通知', link: '/docs/zh/config/notice' },
              { text: '远程命令执行', link: '/docs/zh/config/command' },
              { text: 'WebSocket 服务器', link: '/docs/zh/config/websocket' },
              { text: 'Debug 模式', link: '/docs/zh/config/debug' },
            ]
          },
          {
            text: '扩展功能配置',
            items: [
              { text: '自定义指令', link: '/docs/zh/extra/custom' },
              { text: '分群配置', link: '/docs/zh/extra/multi-group' },
              { text: '脚本功能', link: '/docs/zh/extra/script' },
              { text: 'Web 渲染功能', link: '/docs/zh/extra/web'}
            ]
          },
          {
            text: 'Web 管理面板',
            items: [
              { text: '介绍', link: '/docs/zh/web-manager/description' },
              { text: '安装', link: '/docs/zh/web-manager/installation' }
            ]
          },
          {
            text: '常见问题',
            items: [
              { text: '插件常见问题解答', link: '/docs/zh/faq/plugin'},
              { text: '面板常见问题解答', link: '/docs/zh/faq/web-panel' }
            ]
          },
          {
            text: '接入 API (v1)',
            items: [
              { text: '引入', link: '/docs/zh/api/import' },
              { text: '用法', link: '/docs/zh/api/usage' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        sidebar: [
          // { text: '介绍', link: '/description' },
          // {
          //   text: 'OneBot 11 后端安装',
          //   items: [
          //     { text: '提醒', link: '/docs/zh/dependencies/remind'}
          //   ]
          // },
          // {
          //   text: '插件使用',
          //   items: [
          //     { text: '安装', link: '/plugin-installation' },
          //   ]
          // }
        ]
      }
    }
  }
})
