# 群内播报/通知

目前插件有死亡 (`v2.0-alpha.13` 开发版加入), 玩家加入及退出, 服务器启停播报

默认全部开启, 具体配置在 `config.yml` 的中下部分:

```yaml
# 有关服务器的通知
notify:
  # 服务器启停通知
  server_status:
    # 是否开启该功能
    enable: true

    # 开启时发送的消息:
    start: "[AQQBot] XXX服务器已启动!"

    # 关闭时发送的消息:
    stop: "[AQQBot] XXX服务器已关闭!"

  # 玩家进出通知 (若玩家未绑定账号, 则会将userId这一参数设为 -1)
  player_status:
    # 是否开启该功能
    enable: true

    # 进入时发送的消息:
    join: "[AQQBot] ${playerName}(${userId}) 进入了服务器!"

    # 离开时发送的消息:
    leave: "[AQQBot] ${playerName}(${userId}) 离开了服务器!"

  # 玩家死亡通知
  player_death:
    # 是否开启该功能
    enable: true

    # 发送的消息:
    message: "[AQQBot] ${playerName}(${userId}) 因 ${deathMessage} 死亡了!"
```