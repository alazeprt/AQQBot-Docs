# WebSocket 服务器

WebSocket 是一种基于 TCP 协议的协议，它允许服务器和客户端之间进行双向通信

本插件提供了创建 WebSocket 服务器的功能, 你可以通过 WebSocket 服务器与插件进行通信, 修改插件的配置, 查看插件的状态等

:::warning 警告
如果你使用 Web 管理面板, 必须开启该功能!
:::

该部分配置在 `config.yml` 的较下部:

```yaml
# Webhook 相关功能 (远程 WebSocket 服务器)
webhook:
  # 是否启用该功能
  enable: false

  # 远程 WebSocket 服务器地址
  host: "0.0.0.0"

  # 远程 WebSocket 服务器端口
  port: 8080

  # 远程 WebSocket 服务器 Token
  # ! 务必修改, 切忌泄露
  token: "type_your_token_here"

  # 服务器的名称
  # 请自行修改
  name: "A Minecraft Server"

  # 服务器的 UUID (唯一标识符)
  # 会自动生成, 切忌修改!
  server_uuid: ""
```

:::info 信息
由于以前作者并不了解 Webhook 并非指 WebSocket 服务器, 导致这里被命名为 `webhook`, 为了避免版本间兼容性下降, 暂时决定不修改, 敬请谅解!
:::