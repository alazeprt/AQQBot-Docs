# 脚本功能

在 `v2.0-beta.12` 版本中, 插件推出了脚本功能, 用户可以编写 JavaScript 代码来实现一些自定义的功能

在该版本中, 启动服务器时, 插件会自动在其文件夹下创建一个 `scripts` 文件夹, 你需要把你的 JavaScript 脚本放到该文件夹下以供插件运行, 同时, 该文件夹内还会有一个 `aqqbot.d.ts` 文件, 该文件是 TypeScript 类型定义文件, 你可以将以下代码添加到你的 JavaScript 脚本开头以便获得类型提示:

```javascript
/// <reference path="./aqqbot.d.ts" />

// 开始编写你的脚本代码
```