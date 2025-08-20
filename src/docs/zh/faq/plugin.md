# 插件常见问题解答

## 支持官方的 QQ 机器人接口吗?
> 不支持

## 支持 OneBot v12 协议吗?
> 不支持

## 面板服可以用吗?
> 取决于具体情况, 如果你的面板服可以新增一个运行命令行通用程序的实例, 那一般可以使用, 如果你有其它的公网服务器, 也可以将你的面板服连接到在公网服务器搭建的 OneBot 框架, 即可使用

#### 简幻欢可以用吗?
> 一般不可使用, 除非你有其它的公网服务器

#### 使用 ssh / rdp (远程桌面) 连接到的服务器可以用吗?
> 一般可以使用

## 插件支持除 QQ 以外的其它平台吗?
> 支持 OneBot v11 协议的平台一般都支持

## 假设我搭建了群组服, 应该将插件装在哪里?
> 建议同时在多个子服及群组服安装, 并使用 MySQL 实现数据共享

## 插件出现了报错怎么办?
> 先看报错类型, 如果是含有关键词 `ConnectException` 如: 
> ```log
> [19:53:46 WARN]: Caused by: java.net.ConnectException: Connection refused: connect
> [19:53:46 WARN]:        at java.base/sun.nio.ch.Net.connect0(Native Method)
> [19:53:46 WARN]:        at java.base/sun.nio.ch.Net.connect(Net.java:589)
> [19:53:46 WARN]:        at java.base/sun.nio.ch.Net.connect(Net.java:578)
> [19:53:46 WARN]:        at java.base/sun.nio.ch.NioSocketImpl.connect(NioSocketImpl.java:583)
> [19:53:46 WARN]:        at java.base/java.net.Socket.connect(Socket.java:751)
> [19:53:46 WARN]:        at AQQBot-bukkit-2.0-beta.12-all.jar//org.java_websocket.client.WebSocketClient.run(WebSocketClient.java:491)
> [19:53:46 WARN]:        ... 1 more
> ```
> 的报错则一般是连接失败, 请检查你的 OneBot 框架是否是最新版, 是否已经启动, 登录上账户, WebSocket 正向服务已创建, 防火墙已关闭等
> 
> 其它报错欢迎进入 [GitHub](https://github.com/alazeprt/AQQBot/issues) / [QQ 群](https://qm.qq.com/q/dHfJ8vYjLy) 反馈  

## 插件卡在连接了怎么办?
> 与上一个问题同理
