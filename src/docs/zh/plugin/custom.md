# 自定义指令配置

先看看自定义指令的默认配置文件吧

```yaml
# 自定义命令配置文件
# 在QQ中执行该命令时返回指定结果
# 支持掺杂 PlaceholderAPI 所提供的变量

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

# 例 4
# 返回服务器的内存占用率
memory:
  enable: false
  command: ["/memory", "/内存占用", "内存占用", "/内存占用率", "内存占用率", "RAM", "/RAM"]
  execute: [""]
  unbind_execute: [""]
  choose_account: 1
  image:
    # 图片路径 (图片均要放在 AQQBot/images 目录下)
    path: "memory.png"

    # 图片元素 (目前仅支持文字)
    elements:
      # 示例元素
      memory:
        type: "text" # 元素类型 (目前仅支持 text 即文字)
        data: "服务器内存占用率: %server_ram_used% / %server_ram_total%"
        x: 50 # 元素所在的x坐标
        y: 50 # 元素所在的y坐标
        size: 24 # 字体大小
        font: "Arial" # 字体名称
        color: "#FFFFFF" # 字体颜色 (RGB 格式)
        bold: false # 是否使用粗体
        italic: false # 是否使用斜体
  unbind_image:
    path: "memory.png"
    elements:
      memory:
        type: "text"
        data: "服务器内存占用率: %server_ram_used% / %server_ram_total%"
        x: 50
        y: 50
        size: 24
        font: "Arial"
        color: "#FFFFFF"
        bold: false
        italic: false
```

:::warning 警告
新版本修改了原本的例 1 (原来是获取玩家的前缀), 取而代之引入了三个例子来代替以原先在配置文件里的 TPS, MSPT, CPU 指令
:::

## 示例: 获取服务器帮助

要配置新的自定义指令, 要先在文件内添加一个新的名称, 然后设置开启该命令, 如下 (演示的是获取服务器帮助):
```yaml
# 上面的内容 ...

help:
  enable: true
```

接着, 设置在群内执行 `/help`, `help`, `帮助`, `/帮助` 能获取服务器帮助, 如下:
```yaml
# 上面的内容 ...
help:
  enable: true
  command:
    - "/help"
    - "help"
    - "帮助"
    - "/帮助"
```

然后设置执行的游戏命令, 该自定义指令不需要执行任何游戏命令, 可留空:
```yaml
# 上面的内容 ...
  command:
    - "/help"
    - "help"
    - "帮助"
    - "/帮助"
  execute: [""]
  unbind_execute: [""]
```

再然后设置选择的游戏帐户, 查看服务器帮助不需要用到 PAPI 变量, 所以用默认 (第1个) 账户即可
```yaml
# 上面的内容 ...
  execute: [""]
  unbind_execute: [""]
  choose_account: 1
```

最后设置输出的结果和是否格式化, 这里不需要进行格式化, 同时输出结果不需要因人而异, 所以: 
```yaml
# 上面的内容 ...
  choose_account: 1
  output: ["服务器帮助", "使用 IP mc.alazeprt.top 进入服务器", "支持 1.8 - 1.21.4"]
  unbind_output: ["服务器帮助", "使用 IP mc.alazeprt.top 进入服务器", "支持 1.8 - 1.21.4"]
  format: false
```

完成配置后, 保存, 执行 `/aqqbot reload`, 在群里发送 `/help` 等(上面配置的指令), 就可以看到服务器帮助了

## 示例: 获取个人的信息并显示在 `myinfo.png` 图片上的特定位置

:::tip 提示
你需要先把 `myinfo.png` 图片放在 `AQQBot/images` 目录下
:::

首先, 配置一个新的自定义指令, 名称为 `myinfo`, 启用该命令, 如下:
```yaml
# 上面的内容 ...
myinfo:
  enable: true
```

接着, 配置在群里执行 `/myinfo`, `个人信息`, `/个人信息` 能获取个人信息, 如下:

```yaml
# 上面的内容 ...
myinfo:
  enable: true
  command:
    - "/myinfo"
    - "个人信息"
    - "/个人信息"
```

然后, 配置执行的游戏命令, 该自定义指令不需要执行任何游戏命令, 可留空:

```yaml
# 上面的内容 ...
  command:
    - "/myinfo"
    - "个人信息"
    - "/个人信息"
  execute: [""]
  unbind_execute: [""]
```

再然后设置选择的游戏帐户, 查看服务器帮助不需要用到 PAPI 变量, 所以用默认 (第1个) 账户即可
```yaml
# 上面的内容 ...
  execute: [""]
  unbind_execute: [""]
  choose_account: 1
```

接着, 配置输出的结果, 由于这里是输出图片而不需要发送消息, 因此这里输出设置为空, 同时也不需要进行格式化, 不过未绑定的玩家需要输出消息, 综上, 配置如下:

```yaml
# 上面的内容 ...
  choose_account: 1
  output: [""]
  unbind_output: ["你还没有绑定!"]
  format: false
```

最后, 配置一些图片相关的信息, 假设要在图片坐标为 (50, 50) 的地方显示白色的玩家名称:

```yaml
# 上面的内容 ...
  image:
    path: "myinfo.png"
    elements:
      name:
        type: "text" # 类型: 文字
        data: "%player_name%" # 内容: 玩家名称
        x: 50 # 横坐标为 50
        y: 50 # 纵坐标为 50
        size: 24 # 字体大小为 24
        font: "Arial" # 字体为 Arial
        color: "#FFFFFF" # 颜色为白色
        bold: false # 不使用粗体
        italic: false # 不使用斜体
```

:::warning 警告
注意: Arial 字体可能不支持中文, 请使用其他字体
:::