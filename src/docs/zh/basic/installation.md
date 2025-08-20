# 安装

<!--suppress HtmlUnknownAttribute -->
<script setup>
import ConfigViewer from "../../../components/ConfigViewer.vue";
import { data } from "../../../config-spec/bot/zh.data.mts";
</script>

:::warning 警告
使用插件过程中需要保持 OneBot 11 后端始终正在运行, 若还未安装后端请看 [这里](../dependencies/remind.md)
:::

:::tip 提示
该插件支持所有 Spigot 系的服务端 (如Paper, Purpur, Leaf, Leaves等) **及 Velocity**
:::

## 下载

下载方式: 
- [Github Releases](https://github.com/alazeprt/AQQBot/releases): **推荐**, 这是插件的最新较稳定版本
- [MineBBS](https://www.minebbs.com/resources/aqqbot.9921/): **推荐**, MineBBS 上的是插件的最新稳定版本
- [Github Actions](https://github.com/alazeprt/AQQBot/actions): 是插件的最新开发版本, 可能有较多bug, 不稳定, 不推荐正式服务端环境使用
- [Modrinth](https://modrinth.com/plugin/aqqbot): *不建议*, 由于作者经常懒得上 Modrinth, 所以 Modrinth 上的版本大部分都为 **过时** 版本

## 安装

下载完成后, 将下载好的插件文件放入服务器的 `plugins` 文件夹下, 重启服务器即可生效

## 对接

待服务器启动完成后, 你可能会看到插件的报错, 这是正常现象, 因为插件还没有对接 OneBot 11 后端

要对接 OneBot 11 后端, 首先打开服务器目录下的 `plugins/AQQBot/bot.yml` 配置文件, 这是对接 OneBot 11 后端的核心配置文件, 打开后你大概会看到以下内容:

::: tip
你可以点击配置行显示具体修改方式
:::

<ConfigViewer :data=data name="bot.yml"></ConfigViewer>

修改完后, 执行 `/aqqbot reload` 命令重载插件, 如果这次没有出现报错, 说明 OneBot 11 后端对接成功了, 如果出现了报错, 请检查你是否配置正确, 如果实在不行可以加入 [QQ 群 (669737143)](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=iNRMB5xcrCjHIhph1O3SLvjzvdbqWi4l&authKey=zo29OVGBNyGQ1JicDR79UmssVL8kAu2ubW8PVT%2FSqfC97UNaDVo1Dac%2F7e8M9WAP&noverify=0&group_code=669737143) 寻求帮助