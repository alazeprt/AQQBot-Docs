# 聊天互通/群服互联功能

群服互联可以使玩家在游戏内的消息转发到群内, 群内的消息同样也可以发送到服务器

群服互联的配置在 `config.yml` 的中部, 如下:

```yaml
# 聊天(群服互联)功能
# * Velocity类服务端兼容性可能不是很好
chat:
  # 最大转发字数 (多余的会被替换为...)
  max_forward_length: 200

  # 群->服聊天转发功能 转发结果:
  # [QQ群(${groupId})] ${sender}: ${message}
  group_to_server:
    # 是否启用该功能
    enable: true

    # 若转发, 需要发送什么作为前缀的消息 (空代表不需要前缀)
    prefix:
      - ""

    # (仅Velocity可用!!!!!) 是否将消息发送到所有子服
    # ! 若不开启, 则不会发送消息到任何服务器
    vc_broadcast: false

    # 特定格式化 不需要开启上面的格式化消息选项即可使用
    # 使用方式: 使用 $filter:{内容} 代表匹配指定内容 使用 $regex:{正则表达式} 代表使用正则表达式匹配内容
    # 使用 $url:{屏蔽词json文件地址} $path:{在json文件内词库列表对应的路径} 代表通过URL地址获取屏蔽词 (如不填写path, 则默认为words)
    # 然后打一个空格 写 $replaceTo:{替换内容} 代表将匹配到的内容替换为指定内容 如果直接替换为空可不填写该项
    # 如果你不想替换内容而是取消消息发送, 请将 replaceTo 的内容改为 !CANCEL 即可
    # 不支持在内容 正则表达式或替换内容种出现空格, 如需出现请用 [[space]] 代替
    # 如: $filter:{§x} $replaceTo:{} 代表将所有 §x 符号替换成空字符 (即将所有 §x 符号去除)
    # 如: $regex:{\d{11}} $replaceTo:{电话号码} 代表将所有11位数字替换成 电话号码
    # 如: $url:{http://localhost:8080/test.json} $path:{filter} $replaceTo:{\"[[space]]屏蔽词[[space]]\"}
    #     代表将所有在test.json内filter的列表里的屏蔽词替换为 " 屏蔽词 "
    filter:
      - ""

  # 服->群聊天转发功能 转发结果:
  # [服务器] ${sender}: ${message}
  server_to_group:
    # 是否启用该功能
    enable: true

    # 若转发, 需要发送什么作为前缀的消息 (空代表不需要前缀)
    prefix:
      - ""

    # 是否格式化消息 (将颜色符号去除)
    # 默认包含 §0, §1 , ... , §9, §a, ..., §f, §k, §l, §m, §n, §o, §r
    default_format: true

    # 特定格式化 不需要开启上面的格式化消息选项即可使用
    # 使用方式: 使用 $filter:{内容} 代表匹配指定内容 使用 $regex:{正则表达式} 代表使用正则表达式匹配内容
    # 使用 $url:{屏蔽词json文件地址} $path:{在json文件内词库列表对应的路径} 代表通过URL地址获取屏蔽词 (如不填写path, 则默认为words)
    # 然后打一个空格 写 $replaceTo:{替换内容} 代表将匹配到的内容替换为指定内容 如果直接替换为空可不填写该项
    # 如果你不想替换内容而是取消消息发送, 请将 replaceTo 的内容改为 !CANCEL 即可
    # 不支持在内容 正则表达式或替换内容种出现空格, 如需出现请用 [[space]] 代替
    # 如: $filter:{§x} $replaceTo:{} 代表将所有 §x 符号替换成空字符 (即将所有 §x 符号去除)
    # 如: $regex:{\d{11}} $replaceTo:{电话号码} 代表将所有11位数字替换成 电话号码
    # 如: $url:{http://localhost:8080/test.json} $path:{filter} $replaceTo:{[[space]]屏蔽词[[space]]}
    #     代表将所有在test.json内filter的列表里的屏蔽词替换为 屏蔽词
    filter:
      - ""
#      - "$url:{https://ghproxy.net/https://raw.githubusercontent.com/alazeprt/AQQBot-Docs/master/fucker/database.json} $path:{words} $replaceTo:{***}" # 脏话词库
```

你也可以在 `messages.yml` 配置群服互联的消息 (此处为节选):

```yaml
qq:
  chat_from_game: "[服务器] ${player}: ${message}"

game:
  chat_from_qq: "&8[&aQQ群(${groupId})&8] &b${userName}: &f${message}"
```

:::tip 提示
这里的 ${groupId} 是一个占位符, 表示 QQ 群号
:::