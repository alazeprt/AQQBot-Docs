## 游戏内使用

:::warning 警告
游戏内使用的命令的权限均默认 **不** 给予玩家, 即均为 **管理员指令**
:::

以下是在 `v2.0-beta.11` 以前版本的命令列表:

| 指令                                         | 权限                 | 说明                   |
|--------------------------------------------|--------------------|----------------------|
| /aqqbot reload                             | aqqbot.reload      | 重载插件 (不会重载数据存储方式)    |
| /aqqbot forcebind <QQ号> <名称>               | aqqbot.forcebind   | 给指定的 QQ 绑定指定游戏账户     |
| /aqqbot forceunbind <"qq"/"name"> <QQ号/名称> | aqqbot.forceunbind | 解绑指定的 QQ / 游戏帐户      |
| /aqqbot query <"qq"/"name"> <QQ号/名称>       | aqqbot.query       | 查询指定的 QQ / 游戏账户的绑定数据 |
| /aqqbot help                               | aqqbot.help        | 查看帮助信息               |

以下是在 `v2.0-beta.11` ~ `v2.0-beta.12` 及以后版本的命令列表:

| 指令                                              | 权限                    | 说明                   |
|-------------------------------------------------|-----------------------|----------------------|
| /aqqbot reload                                  | aqqbot.command.reload | 重载插件 (不会重载数据存储方式)    |
| /aqqbot status                                  | aqqbot.command.status | 查看插件状态               |
| /aqqbot send <群号> <消息>                          | aqqbot.command.send   | 发送消息到指定群             |
| /aqqbot help                                    | aqqbot.help           | 查看帮助信息               |
| /aqqbot whitelist bind <QQ号> <名称>               | aqqbot.command.bind   | 给指定的 QQ 绑定指定游戏账户     |
| /aqqbot whitelist unbind <"qq"/"name"> <QQ号/名称> | aqqbot.command.unbind | 解除指定的 QQ / 游戏帐户      |
| /aqqbot whitelist query <"qq"/"name"> <QQ号/名称>  | aqqbot.command.query  | 查询指定的 QQ / 游戏账户的绑定数据 |
| /aqqbot whitelist reset <"qq"/"name"> <QQ号/名称>  | aqqbot.command.reset  | 重置指定 QQ / 游戏账户的绑定数据  |

以下是在 `v2.0-alpha.13` 增加的命令列表:

| 指令                               | 权限                     | 说明                   |
|----------------------------------|------------------------|----------------------|
| /aqqbot market install <名称> [版本] | aqqbot.command.market  | 从官方仓库安装脚本插件          |
| /aqqbot market update <名称>       | aqqbot.command.market  | 从官方仓库更新脚本插件          |
| /aqqbot market list              | aqqbot.command.market  | 查看官方仓库的所有脚本插件        |
| /aqqbot market info <名称> [版本]    | aqqbot.command.market  | 查看官方仓库中某脚本插件的详细信息    |
| /aqqbot scripts download <URL地址> | aqqbot.command.scripts | 从 URL 下载脚本插件         |
| /aqqbot scripts load <名称>        | aqqbot.command.scripts | 加载指定名称 (文件夹名称) 的脚本插件 |
| /aqqbot scripts reload           | aqqbot.command.scripts | 重载所有脚本插件             |
| /aqqbot scripts list             | aqqbot.command.scripts | 查看所有已加载的脚本插件         |
| /aqqbot scripts info <名称>        | aqqbot.command.scripts | 查看指定名称的脚本插件的详细信息     |