# 使用

## 基本依赖检查

在使用 AQQBot 的 API 之前, 首先要检验服务端环境是否安装了 AQQBot, 需要在插件的 `plugin.yml` 添加以下内容来注册依赖插件:

```yaml
depend: [AQQBot] # 代表注册 AQQBot 插件为必要依赖
softdepend: [AQQBot] # 代表注册 AQQBot 插件为可选依赖
```

:::info 说明
两行只要选一行就行, 视情况而定
:::

接着, 你需要在插件启用时检验 AQQBot 插件是否已启用, 在插件主类的 `onEnable()` 方法中添加以下代码:

适用于插件为必要依赖的代码: 
```java
if (!getServer().getPluginManager().isPluginEnabled("AQQBot")) {
    getLogger().severe("AQQBot is not installed! Please install it to use this plugin.");
    getServer().getPluginManager().disablePlugin(this);
}
```

适用于插件为可选依赖的代码: 
```java
if (!getServer().getPluginManager().isPluginEnabled("AQQBot")) {
    getLogger().warning("AQQBot is not installed! This plugin may not work well.");
}
```

接着就可以尽情的使用 AQQBot 的 API 了!

## 获取插件实例

可以通过 **`AQQBot.INSTANCE`** 来获取插件实例, 接着你就可以通过该实例来调用方法了, 变量的话可以直接获取, 不需要间接通过插件实例

## 插件变量解释

| 变量                    | 类型                 | 说明                     |
|-----------------------|--------------------|------------------------|
| `AQQBot.INSTANCE`     | Plugin             | 插件实例, 用于调用插件内方法        |
| `AQQBot.oneBotClient` | WebsocketBotClient | OneBot 实例, 用于执行关于QQ的操作 |

## 插件实例内方法解释
:::info 说明
这里的方法均通过 `AQQBot.INSTANCE` 插件实例调用, 而非直接通过 `AQQBot` 类调用
:::

| 方法                                     | 说明            |
|----------------------------------------|---------------|
| `searchQQByName(name: String): String` | 根据游戏名称查询 QQ 号 |
| `searchNameByQQ(qq: String): String`   | 根据 QQ 号查询游戏名称 |
| `registerEvent(event: AQBListener)`    | 注册插件的事件监听器    |

## 例子

### 例1: 获取 OneBot 实例 并发送私信
```java
WebsocketBotClient client = AQQBot.oneBotClient;
if (client.isConnected()) {
    client.action(new SendPrivateMessage(431876428L, "Hello, World!"));    
}
```

:::info 说明
这是一个代码片段, 不能直接复制粘贴到空文件内
:::

该代码通过插件内的变量获取 OneBot 实例, 接着先检查 OneBot 客户端是否已连接, 然后发送私信给用户 431876428

### 例2: 编写指令实现 自身 QQ 号查询

```java
public final class TestMavenPlugin extends JavaPlugin implements CommandExecutor {
    @Override
    public void onEnable() {
        // Plugin startup logic
        if (!getServer().getPluginManager().isPluginEnabled("AQQBot")) {
            getLogger().severe("AQQBot is not installed! Please install it to use this plugin.");
            getServer().getPluginManager().disablePlugin(this);
        }
        getCommand("queryqq").setExecutor(this);
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        sender.sendMessage("查询到的QQ号为: " + AQQBot.INSTANCE.searchQQByName(sender.getName()));
        return false;
    }
}
```

该代码注册了一个为 `/queryqq` 的指令, 当玩家执行该命令时, 将会调用 `onCommand()` 方法, 该方法通过调用 `AQQBot.INSTANCE.searchQQByName(name: String): String` 获取玩家的 QQ 号并发送给玩家

:::tip 提示
在完成该代码后, 需在 `plugin.yml` 注册指令, 类似于下面这样: 
```yaml
commands:
  queryqq:
    description: 查询自己的 QQ 号
```
:::

### 例3: 监听解绑事件, 解绑后在服务器发送消息

```java
public final class TestMavenPlugin extends JavaPlugin implements AQBListener {
    @Override
    public void onEnable() {
        // Plugin startup logic
        if (!getServer().getPluginManager().isPluginEnabled("AQQBot")) {
            getLogger().severe("AQQBot is not installed! Please install it to use this plugin.");
            getServer().getPluginManager().disablePlugin(this);
        }
        AQQBot.INSTANCE.registerEvent(this);
    }

    public void onUnbind(UnbindEvent event) {
        Bukkit.broadcastMessage(event.getUserId() + "解绑了自己的账号 " + event.getPlayerName());
    }
}
```

该代码实现了 `AQBListener` 接口, 在启动时通过 `AQQBot.INSTANCE.registerEvent(event: AQBListener)` 注册了自身类为的监听器, 当玩家解绑账号时, AQQBot 插件将会调用 `onUnbind()` 方法, 该方法通过调用 `Bukkit.broadcastMessage(message: String)` 在服务器广播玩家的解绑消息

:::info 说明
如果你要使用 AQQBot 的事件, 请确保你监听的事件只有一个继承 `AQBEvent` (AQQBot 事件) 的变量, 并且你注册了这个类, 否则方法不会被调用
:::