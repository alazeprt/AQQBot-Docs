# 安装

:::tip 提示
该插件需要依赖 AQQBot 插件的webhook功能, 请先安装 AQQBot 插件最新版本并开启webhook功能
:::

## 下载

下载方式: 
- [Github Actions](https://github.com/mc506lw/aqqbot-web/actions): 面板的最新开发版本, 可以用来测试新功能, 在正式环境中使用理论上没有问题，但不建议
- [Github Releases](https://github.com/mc506lw/aqqbot-web/releases): **推荐**, 这是面板的稳定版本，但是更新较慢

版本选择:
- AQQBot-web-win.zip: 适用于Windows系统
- AQQBot-web-linux.zip: 适用于Linux系统
- AQQBot-web-noenv.zip: 适用于预先安装好了nodejs的Windows/Linux系统

## 安装

下载完成后, 将下载到的压缩包解压, 并将解压后的文件夹放入任意位置

```
直接运行 start.bat 启动项目
```

## 配置端口

默认端口为 3000, 如果你的端口被占用或想要修改端口，你可以在自己系统对应的start.bat或start.sh中修改

## 打开面板

待服务器启动完成后, 你需要打开浏览器, 访问 `http://localhost:端口号` 即可打开面板
