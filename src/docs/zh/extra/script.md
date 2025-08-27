# 脚本功能

在 `v2.0-beta.12` 版本中, 插件推出了脚本功能, 用户可以编写 JavaScript 代码来实现一些自定义的功能

在该版本中, 启动服务器时, 插件会自动在其文件夹下创建一个 `scripts` 文件夹, 并在里面查找插件 (脚本) 信息, 并自动加载脚本文件

## 准备工作

首先, 你需要在 `scripts` 文件夹下创建一个新的目录, 并在里面创建一个文件 `manifest.json`, 该文件用于描述脚本的基本信息, 需要包含以下字段:

```jsonc
{
  "schema_version": 1, // 脚本使用的 aqqbot.d.ts 版本, 必填
  "entrypoint": "test.js", // 脚本入口文件名, 必填
  "name": "Test Script", // 脚本名称, 选填
  "description": "This is a test script", // 脚本描述, 选填
  "author": "alazeprt", // 脚本作者, 选填
  "version": "1.0.0" // 脚本版本, 选填
}
```

## 开始编写

在 `scripts` 文件夹下有一个 `aqqbot.d.ts` 文件, 该文件是 TypeScript 类型定义文件, 你可以将以下代码添加到你的 JavaScript 脚本开头以便获得类型提示:

```javascript
/// <reference path="./aqqbot.d.ts" />

// 开始编写你的脚本代码
```

## 发布插件

你可以将插件发布到 [AQQBot 官方插件仓库](https://github.com/alazeprt/AQQBot-Plugins), 其他用户便可以通过内置命令安装插件并使用

首先, 你需要 [Fork AQQBot 官方插件仓库](https://github.com/alazeprt/AQQBot-Plugins/fork), 然后将你的插件信息添加到其中的 `repository.json`, 示例如下:

```jsonc
{
  // 存储库基本信息
  "name": "AQQBot 官方插件库",
  "author": "alazeprt",
  "description": "AQQBot 官方插件库, 收录了 AQQBot 社区开发者的一些优秀插件",
  "website": "https://github.com/alazeprt/AQQBot-Plugins",
  "schema_version": 1,
  // 插件列表
  "plugins": [
    // 其他插件 ...
    // 你的插件信息
    {
      // 先在这里填写你在 manifest.json 中填写的基本信息 (entrypoint 无需填写)
      "schema_version": 1, // 必填
      "name": "Test Script", // 必填
      "description": "This is a test script", // 选填
      "entrypoint": "test.js", // 选填
      "author": "alazeprt", // 必填
      "version": "1.0.0", // 必填
      "download": "https://example.com/test-script-1.0.0.zip", // 下载地址, 你需要填写的是一个下载 .zip 文件的链接, 下载后会自动解压到 AQQBot 插件目录下 (不会创建新的目录, 解压到插件目录下), 你也可以直接填写 GitHub 下载源码的链接
    }
  ]
}
```

在填写好后, 向 AQQBot 官方插件仓库提交 [Pull Request](https://github.com/alazeprt/AQQBot-Plugins/pulls), 等待审核通过即可

