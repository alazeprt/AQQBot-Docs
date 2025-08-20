# 远程命令执行

远程命令执行可以使管理员在群内向服务器发送命令, 便于服务器的管理

该部分在配置文件的较下部分, 具体如下:

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

  # 执行命令的方案排序
  # 越前的越优先测试 若无法使用则会继续进行下一个测试 直到成功或全部测试失败
  # 可用方案:
  # - NATIVE: 通过 Bukkit 内部 API 内部方法创建 CommandSender 执行命令 (适用于高版本/非混合端)
  # - DEDICATED_SERVER: 通过 Bukkit 内部 API 获取 DedicatedServer 实例并以其执行命令 (适用于较高版本/非混合端)
  # - MINECRAFT_SERVER: 通过 Bukkit 内部 API 获取 MinecraftServer 实例并创建 RCON 实例以其执行命令 (适用于较低版本/部分混合端)
  # - SIMULATE_CONSOLE: 创建一个基于 Bukkit 外部 API 的 CommandConsoleSender 终端实例并执行命令 (适用于全版本/混合端)
  sort:
    - "NATIVE"
    - "DEDICATED_SERVER"
    - "MINECRAFT_SERVER"
    - "SIMULATE_CONSOLE"

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