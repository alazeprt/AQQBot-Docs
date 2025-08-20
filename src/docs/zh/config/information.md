# 信息查询功能

目前 `config.yml` 中的 `information` 字段用于配置信息查询功能, 在文件的中上部:

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

  # 功能: @某人
  at:
    # 是否启用该功能
    enable: true

    # @人所需要包含的内容 (${player} 代表 @ 的玩家名)
    command:
      - "@${player}"
      - "${player}"

    # 在 @某人 后的操作
    action:
      - 'playsound block.bell.use master ${player}'
      - 'title @a subtitle {"text":"[AQQBot] ${userId} @了你!","color":"gold"}'
```

:::tip 提示
at 功能在 `v2.0-alpha.13` 开发版中加入
:::

同时, 部分功能也被迁移到了 `custom.yml` 自定义指令功能配置文件中:

```yaml
# 例 1
# 返回服务器的 TPS
tps:
  # 是否开启该命令
  enable: true

  # 获取命令
  # 支持 正则表达式 使用 $regex:{你的正则表达式} (可作为参数匹配使用)
  # 支持添加自定义参数, 如 ${argName}, argName可改为自定义的参数名
  # 若是可选参数, 则为 ${argName?:default} default请填写默认值, 如无默认值则请填写 ${argName?}
  # 该参数可在下面的 execute, unbind_execute, output, unbind_output 中使用 如无默认值且用户未使用参数则为空
  command:
    - "/tps"
    - "tps"
    - "/服务器tps"
    - "服务器tps"
    - "TPS"
    - "/TPS"

  # 以后台身份执行命令 (可选) 支持 PAPI
  # 若需要表示玩家的名字, 请使用 $player 作为参数 (会选取第一个绑定的账号)
  # 若不需要执行命令, 请将其设置为空
  # 命令不需要以/开头，会自动补全
  execute:
    - ""

  # 未绑定账号的用户以后台身份执行命令 (可选)
  # 同上
  unbind_execute:
    - ""

  # 若玩家绑定了多个账号, 要选用第几个作为 PlaceholderAPI 的变量解析玩家
  # 若玩家绑定账号小于这个个数, 则默认使用第一个
  choose_account: 1

  # 输出结果
  # 若想随机输出, 你可以在列表添加 $random 代表随机内容分隔符
  # 如: - "第一个随机选项" - "xxx" - "$random" - "第二个随机选项" - "$random" - "第三个随机选项"
  # 代表 随机输出 第一个选项(换行)xxx, 第二个选项, 第三个选项 中的其中一个
  # 你也可以使用 $executes[index] 代表上方特定命令的执行结果 (index 从 1 开始)
  output:
    - "服务器TPS: %spark_tps%"

  # 未绑定账号的玩家输出 (PAPI 变量将会以无身份 (null) 解析)
  # 同上支持随机输出与调用特定命令执行结果
  unbind_output:
    - "服务器TPS: %spark_tps%"

  # 是否格式化颜色符号 (如: &7普通&a玩家 -> 普通玩家)
  format: true

# 例 2
# 返回服务器的 MSPT
mspt:
  enable: true
  command: ["/mspt", "mspt", "/服务器mspt", "服务器mspt", "MSPT", "/MSPT"]
  execute: [""]
  unbind_execute: [""]
  choose_account: 1
  output: ["服务器MSPT: %spark_tickduration%"]
  unbind_output: ["服务器MSPT: %spark_tickduration%"]
  format: true

# 例 3
# 返回服务器的CPU占用率
cpu:
  enable: true
  command: ["/cpu", "cpu", "/cpu占用", "cpu占用", "/cpu占用率", "cpu占用率", "CPU", "/CPU"]
  execute: [""]
  unbind_execute: [""]
  choose_account: 1
  output: ["服务器CPU占用率: %spark_cpu_system%"]
  unbind_output: ["服务器CPU占用率: %spark_cpu_system%"]
  format: true
```

你可以在自定义指令配置中添加更多的自定义命令

:::tip 提示
你需要安装 PlaceholderAPI 和 spark 插件, 同时执行以下命令才能使用这里默认的自定义指令来查询服务器信息:
```text
/papi ecloud download spark
/papi reload
```
:::