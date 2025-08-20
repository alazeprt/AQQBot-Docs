# 白名单/绑定功能

白名单/绑定功能默认开启, 要求玩家在进入时通过 QQ 群发送消息绑定自己的账户

你可以在 `config.yml` 配置文件的较前部分找到白名单/绑定功能的相关配置:

```yaml
# 添加白名单
whitelist:
  # 是否启用该功能
  enable: true

  # 是否必须绑定后才能进入游戏
  # ! 若关闭该功能, 则 VERIFY_CODE 的验证方法不起效
  need_bind_to_login: true

  # 验证方法
  # - GROUP_NAME: 在QQ群中发送 $command $name 来给自己的QQ绑定指定的游戏账户(名称)
  # - VERIFY_CODE: 玩家在进入游戏后获取一个6位数验证码, 在QQ群发送 $command $code 后方可绑定游戏账户(名称)
  verify_method: "GROUP_NAME"

  # 验证码过期时间 (单位: 秒)
  # 在验证方法为 VERIFY_CODE 时可用
  verify_code_expire_time: 300

  # 一个QQ号最多可以绑定多少个账户
  max_bind_count: 1

  # 名称验证规则
  # 默认规则为支持任意字符
  name_rule: "[\\S]*"

  # 功能指令前缀
  prefix:
    # 绑定指令前缀
    # 用户需要发送的消息: $command $name
    # ! 如果验证方法为 VERIFY_CODE, 则用户需要发送的消息为: $command $code
    bind:
      - "/绑定"
      - "/bind"

    # 解绑指令前缀
    # 用户需要发送的消息: $command $name
    unbind:
      - "/解绑"
      - "/unbind"

  # 是否开启退群自动解绑
  unbind_on_leave: true

  # 可以无需绑定即可进入的用户所需要的权限:
  bypass_permission: "aqqbot.whitelist.bypass"

  # 使用非管理员命令的用户的冷却时间 (单位: 秒)
  cooldown:
    # 绑定指令的冷却时间
    bind: 60

    # 解绑指令的冷却时间
    unbind: 86400

  # 绑定后修改群名称
  # * 该功能要求 QQ 机器人有群管理员权限
  change_nickname_on_bind:
    # 是否启用该功能
    enable: false

    # 修改群昵称的格式
    # 可用变量: ${playerName} -> 游戏名, ${qq} -> QQ号, ${nickName} -> 当前用户群昵称
    format: "[${nickName}] ${playerName}"

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