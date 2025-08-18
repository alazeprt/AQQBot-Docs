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
            text: '插件使用',
            items: [
              { text: '安装', link: '/docs/zh/plugin/installation' },
              { text: '使用', link: '/docs/zh/plugin/usage' },
              { text: '配置前的提醒', link: '/docs/zh/plugin/remind' },
              { text: '基本配置', link: '/docs/zh/plugin/configuration' },
              { text: '基本配置 (v2)', link: '/docs/zh/plugin/configuration-v2' },
              { text: '消息配置', link: '/docs/zh/plugin/message' },
              { text: '自定义指令', link: '/docs/zh/plugin/custom' },
              { text: 'Q&A', link: '/docs/zh/plugin/qa' }
            ]
          },
          {
            text: '后台面板',
            items: [
              { text: '介绍', link: '/docs/zh/manageweb/description' },
              { text: '安装', link: '/docs/zh/manageweb/installation' },
              { text: 'Q&A', link: '/docs/zh/manageweb/qa' }
            ]
          },
          {
            text: '接入 API (v1)',
            items: [
              { text: '引入', link: '/docs/zh/api/import' },
              { text: '用法', link: '/docs/zh/api/usage' }
            ]
          },
          {
            text: '接入 API (v2)',
            items: [
              { text: '引入', link: '/docs/zh/apiv2/import' },
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
          { text: '介绍', link: '/description' },
          {
            text: 'OneBot 11 后端安装',
            items: [
              { text: '提醒', link: '/docs/zh/dependencies/remind'}
            ]
          },
          {
            text: '插件使用',
            items: [
              { text: '安装', link: '/plugin-installation' },
            ]
          }
        ]
      }
    }
  }
})
