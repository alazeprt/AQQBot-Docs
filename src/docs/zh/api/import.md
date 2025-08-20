# 引入依赖

:::warning 警告
v1 目前已经不再维护, 不建议再使用该版本进行开发, v2 的开发文档正在加急编写中, 敬请期待
:::

你需要使用 Maven 或 Gradle 构建系统来引入依赖

## Maven

在 Maven 项目 的 `pom.xml` 文件中加入以下内容, 重载项目后如无报错则代表成功引入依赖:

:::tip 提示
如果你的插件已经有了 \<repositories\> 和 \<dependencies\> 标签,
则可以直接在 **其中** 加入这里的 \<repositories\> 及 \<dependencies\> 标签 **里** 的内容, 不需要再添加相同的标签
:::

```xml
<repositories>
    <repository>
        <id>taboolib-repo</id>
        <url>http://sacredcraft.cn:8081/repository/releases</url>
    </repository>
    <repository>
        <id>jitpack</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.github.alazeprt</groupId>
        <artifactId>AQQBot</artifactId>
        <version>1.1.2</version>
    </dependency>
</dependencies>
```

:::warning 警告
由于 taboolib 的仓库为非 HTTPS 协议, 而 Maven 在 3.8.1 版本以上就不支持 HTTP 协议了, 所以需要修改 Maven 的 settings.xml 设置文件
:::

### 修改 Maven settings.xml

在 Maven 的用户目录下找到 `settings.xml` 文件 (一般在 `C:/Users/你的用户名/.m2/settings.xml` 或 `C:\Program Files\JetBrains\IntelliJ IDEA 版本号\plugins\maven\lib\maven3\conf\settings.xml`)

**注意: 需要将 你的用户名 或 IntelliJ IDEA 版本号 替换为你的实际用户名或 IntelliJ IDEA 版本号**

接着在文件内搜索 `maven-default-http-blocker`, 找到以下内容, 选择这些内容按 `Ctrl+/` 注释, 然后保存文件, 重载项目即可使用 HTTP 协议的仓库

![注释前的配置文件](/../assets/img/maven-block-http.png "注释前的配置文件")

:::tip 提示
该文件是注释前的, 注释后会变成像上面的内容一样是绿色的
:::

## Gradle

Gradle 就省事多了

:::tip 提示
如何分辨你的 DSL 类型?
观察你的项目, 如果根目录的文件是 `build.gradle` 则为 Groovy DSL, 如果是 `build.gradle.kts` 则为 Kotlin DSL
:::

:::tip 提示
如果你的插件已经有了 repositories {} 和 dependencies {} 部分,
则可以直接在 **其中** 加入这里的 repositories {} 及 dependencies {} 部分 **里** 的内容, 不需要再添加相同的部分
:::

### Groovy DSL

在 `build.gradle` 添加以下内容, 重载项目后如无报错则代表成功引入依赖:

```groovy
repositories {
    maven { url = "https://jitpack.io/" }
    maven {
        url = "http://sacredcraft.cn:8081/repository/releases/"
        allowInsecureProtocol = true
    }
}

dependencies {
    compileOnly("com.github.alazeprt:AQQBot:1.1.2")
}
```

### Kotlin DSL

在 `build.gradle.kts` 添加以下内容, 重载项目后如无报错则代表成功引入依赖:

```kotlin
repositories {
    maven("https://jitpack.io/")
    maven {
        url = uri("http://sacredcraft.cn:8081/repository/releases/")
        isAllowInsecureProtocol = true
    }
}

dependencies {
    compileOnly("com.github.alazeprt:AQQBot:1.1.2")
}
```

## 检验是否引入成功

查看 IDEA 的项目的 `External Libraries`, 检查是否有 `com.github.alazeprt:AQQBot:1.1.2` 依赖, 若有代表则引入成功, 如图:

![引入成功的标志](/../assets/img/idea-external-libraries.png "引入成功的标志")

## 如何重载项目

如图:

![重载项目](/../assets/img/idea-reload-project.png "重载项目")