# 基本配置 (v2)

:::tip 提示
在 v2 版本对配置文件进行了一部分修改, 这里将会介绍**修改的**地方, 如果你还在使用 v1 版本, 你**仅需要**参考 [这里](./configuration.md)
:::

我们来分块解析一下插件的默认配置文件 `config.yml`

## 版本
原对应 第 5 行 现对应 第 5 行
```yaml
version: 16
```

`v2.0-alpha` 与 `v2.0-beta` 版本的配置文件的版本均为 `16`, 用于判断配置文件是否要更新, 切忌修改!

目前最新版本 `v2.0-beta.11` 的配置版本已更新到 `19`, 请注意!

## 管理员白名单配置

原对应 第 77 行 现对应 第 74 - 90 行

```yaml
  # 管理员管理
  admin:
    # 是否启用该功能
    enable: true

    # 绑定指令前缀
    # 用户需要发送的消息: $command $userId $name
    # ! 如果验证方法为 VERIFY_CODE, 则用户需要发送的消息为: $command $code
    bind:
      - "/管理绑定"
      - "/abind"

    # 解绑指令前缀
    # 用户需要发送的消息: $command $userId $name
    unbind:
      - "/管理解绑"
      - "/aunbind"
```

新版本对管理员白名单管理进行了扩展, 可自定义管理员白名单的指令前缀, 当然你也可以设置的和默认的绑定指令前缀一样

## 白名单中游戏名称规则

对应配置文件第 48 行

```yaml
whitelist:
  # 省略前面部分 ...

  # 名称验证规则
  # 默认规则为支持任意字符
  name_rule: "[\\S]*"

  # 省略后面部分 ...
```

为了支持基岩版用户前面带 `.` 的游戏名称, 便有了这个配置项, 这里的规则是支持任意字符

## 白名单中绑定/解绑冷却市场

对应配置文件第 68 - 74 行

```yaml
whitelist:
  # 省略前面部分 ...

  # 使用非管理员命令的用户的冷却时间 (单位: 秒)
  cooldown:
    # 绑定指令的冷却时间
    bind: 60

    # 解绑指令的冷却时间
    unbind: 86400

  # 省略后面部分 ...
```

为了防止被封号的人恶意使用绑定/解绑指令, 这里设置了冷却时间, 默认绑定指令的冷却时间为 60 秒, 解绑指令的冷却时间为 86400 秒 (即 24 小时)

## 远程命令执行

对应配置文件第 230 - 241 行

```yaml
command_execution:
  # 省略前面部分 ...

  # 执行命令的方案排序
  # 越前的越优先测试 若无法使用则会继续进行下一个测试 直到成功或全部测试失败
  # 可用方案:
  # - NATIVE: 通过 Bukkit 内部 API 内部方法创建 CommandSender 执行命令 (适用于高版本/非混合端)
  # - DECIDATED_SERVER: 通过 Bukkit 内部 API 获取 DecidatedServer 实例并以其执行命令 (适用于较高版本/非混合端)
  # - MINECRAFT_SERVER: 通过 Bukkit 内部 API 获取 MinecraftServer 实例并创建 RCON 实例以其执行命令 (适用于较低版本/部分混合端)
  # - SIMULATE_CONSOLE: 创建一个基于 Bukkit 外部 API 的 CommandConsoleSender 终端实例并执行命令 (适用于全版本/混合端)
  sort:
    - "NATIVE"
    - "DECIDATED_SERVER"
    - "MINECRAFT_SERVER"
    - "SIMULATE_CONSOLE"
    
  # 省略后面部分 ...
```

为了更好的支持远程命令执行, 新推出了 NATIVE, DECIDATED_SERVER, MINECRAFT_SERVER 这三种方案 (注意: 这三种方案仅适用于 Bukkit 类服务端, 其它服务端请使用 SIMULATE_CONSOLE 方案)

## Webhook 选项

对应配置文件第 263 - 284 行

```yaml
# Webhook 相关功能 (远程 WebSocket 服务器) (暂不可用)
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

为了后续对前端管理面板的支持, 新推出了 Webhook 功能, 你可以通过远程 WebSocket 服务器来进行一些操作