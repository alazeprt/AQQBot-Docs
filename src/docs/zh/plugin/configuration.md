# 基本配置

:::tip 提示
这里演示的是 1.1.1 版本配置文件, 如果你从旧版本升级, 可以对照这里看看有没有缺少的配置项补上去, 否则可能会出现一些问题!
同时, 你可以通过这里的行数方便快捷地定位到你需要修改的配置项
:::

我们来分块解析一下插件的默认配置文件 `config.yml`

## 版本

对应 第 5 行

```yaml
version: 15
```

该功能从 `1.0.14` 引入, 在 `1.0.14` 到 `1.1.0` 之间的版本为 14, `1.1.1` 的版本为 15, 用于判断配置文件是否要更新, 切忌修改!

## 存储

对应 第 7 - 23 行

```yaml
# 存储相关配置 (重启后生效)
storage:
  # 存储方式
  # 可选方式: file, sqlite, mysql
  type: "file"

  # SQLite 数据库配置
  sqlite:
    file: "aqqbot.db"

  # MySQL 数据库配置
  mysql:
    host: "127.0.0.1"
    port: 3306
    user: "root"
    password: "123456"
    database: "aqqbot"
```

:::warning 警告
在使用 MySQL 数据库时, 请确保你已经安装好了 MySQL 数据库并**创建好了对应的数据库** (即这里的 `storage.mysql.database` 的名称), 否则可能导致插件无法启动!
:::

## 白名单

对应 第 25 - 77 行

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

  # 绑定后修改群名称
  # * 该功能要求 QQ 机器人有群管理员权限
  change_nickname_on_bind:
    # 是否启用该功能
    enable: false

    # 修改群昵称的格式
    # 可用变量: ${playerName} -> 游戏名, ${qq} -> QQ号, ${nickName} -> 当前用户群昵称
    format: "[${nickName}] ${playerName}"

  # 是否启用管理员管理
  # 管理员可通过/$command $userId $name 进行绑定/解绑
  # ! 验证方法不影响该功能的使用
  admin: true
```

这里需要注意一点, 如果你使用的是验证码方式, 则你仍然需要使用 绑定的指令前缀 来使用验证码 (如 `/绑定 123456`, 当然你也可以修改绑定的指令前缀), 

同时, 如果你使用的是验证码形式, 则管理员功能也要用绑定的指令前缀 (假如你将绑定指令前缀改为了 `/验证`, 则管理员功能就需要使用 `/验证 $userId $name` 来进行绑定)

## 信息查询

对应 第 79 - 94 行

```yaml
# 查询服务器基本信息
information:
  # 功能: 查询服务器在线玩家 输出结果:
  # 服务器在线玩家(${amount}): ${player_list}
  list:
    # 是否启用该功能
    enable: true

    # 获取指令
    command:
      - "/list"
      - "list"
      - "在线玩家"
      - "/在线玩家"
      - "服务器在线玩家"
      - "/服务器在线玩家"
```

在最新版中, 去除了默认有的 `/cpu`, `/tps`, `/mspt` 的查询功能, 取而代之使用 `custom.yml` 配置文件的功能来实现, 但是你仍可以使用旧版的 `/cpu`, `/tps`, `/mspt` 指令来查询服务器信息 (如果你的旧版这些指令的配置文件还在)

## 群服互联

对应 第 96 - 153 行

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
    # 不支持在内容 正则表达式或替换内容种出现空格, 如需出现请用 [[space]] 代替
    # 如: $filter:{§x} $replaceTo:{} 代表将所有 §x 符号替换成空字符 (即将所有 §x 符号去除)
    # 如: $regex:{\d{11}} $replaceTo:{电话号码} 代表将所有11位数字替换成 电话号码
    # 如: $url:{http://localhost:8080/test.json} $path:{filter} $replaceTo:{\"[[space]]屏蔽词[[space]]\"}
    #     代表将所有在test.json内filter的列表里的屏蔽词替换为 " 屏蔽词 "
    filter:
      - ""
#      - "$url:{https://gh.llkk.cc/https://github.com/alazeprt/AQQBot-Docs/raw/refs/heads/master/fucker/database.json} $replaceTo:{}" # 脏话词库
```

:::warning 警告
如果你从旧版本迁移过来, 务必加上 `max_forward_length` 的配置项, 否则可能转发的内容会直接变成 `...`
:::

这里 `server_to_group` 中最后一行注释的是脏话词库, 你可以取消注释, 这样在游戏内发的脏话转发到群里就会被默认清除

## 通知设置

对应 第 155 - 177 行

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
```

这里没什么要注意的

## 命令执行

对应 第 179 - 220 行

```yaml
# 服务器命令远程执行
# * 该功能仅支持Bukkit类服务端
# 通过在QQ发送指定前缀消息来执行服务器命令
# 执行命令时, 不需要再加 / 号, 只需要填写命令前缀
# 如: 在游戏里执行 /spark health -> 在QQ群内执行 /sudo spark health
command_execution:
  # 是否启用该功能
  enable: true

  # 允许使用该功能的人
  # $ADMIN 代表所有管理员
  # $OWNER 代表群主
  # $USER 代表所有用户
  # 范围覆盖: $USER > $ADMIN > $OWNER
  # 如果你想指定除了这里的人以外的特定用户, 你可填写用户的QQ号到这里
  allow:
    - "$ADMIN"

  # 指令前缀
  prefix:
    - "/sudo"
    - "/执行"

  # 是否格式化消息 (将颜色符号去除)
  # 默认包含 §0, §1 , ... , §9, §a, ..., §f, §k, §l, §m, §n, §o, §r
  format: true

  # 特定格式化 不需要开启上面的格式化消息选项即可使用
  # 使用方式: 使用 $filter:{内容} 代表匹配指定内容 使用 $regex:{正则表达式} 代表使用正则表达式匹配内容
  # 使用 $url:{屏蔽词json文件地址} $path:{在json文件内词库列表对应的路径} 代表通过URL地址获取屏蔽词 (如不填写path, 则默认为words)
  # 然后打一个空格 写 $replaceTo:{替换内容} 代表将匹配到的内容替换为指定内容 如果直接替换为空可不填写该项
  # 不支持在内容 正则表达式或替换内容种出现空格, 如需出现请用 [[space]] 代替
  # 如: $filter:{§x} $replaceTo:{} 代表将所有 §x 符号替换成空字符 (即将所有 §x 符号去除)
  # 如: $regex:{\d{11}} $replaceTo:{电话号码} 代表将所有11位数字替换成 电话号码
  # 如: $url:{http://localhost:8080/test.json} $path:{filter} $replaceTo:{\"[[space]]屏蔽词[[space]]\"}
  #     代表将所有在test.json内filter的列表里的屏蔽词替换为 " 屏蔽词 "
  filter:
    - ""

  # 等待输出结果多长时间
  # 单位: 秒
  delay: 2
```

这里执行的命令是以后台 (管理员) 身份为执行, 相当于几乎任何命令都可以执行, 所以请小心开放权限!

## 调试选项

对应 第 222 - 239 行

```yaml
# 调试选项
debug:
  # 是否启用该功能
  # ! 该项启用后才能使用调试选项的子功能 (如logger)
  enable: false

  # 有关日志的调试选项
  logger:
    # 是否启用该功能
    enable: true

    # 日志存储文件名
    file: "debug.log"

    # 每隔多长时间保存一次日志文件 (单位: 秒)
    # 设置为 -1 代表关服时保存
    # 设置为 0 代表实时保存 (在有新的日志时就保存)
    save_interval: 0
```

没啥用, 建议不要开启, 但是如果你有想记录玩家绑定/解绑的可以开启