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