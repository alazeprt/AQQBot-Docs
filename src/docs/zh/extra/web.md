# Web 渲染功能

Web 渲染功能是指将 HTML, CSS, JavaScript 代码渲染成图片, 并转发到群内的功能, 对原来的图片功能进行了增强

## 开始编写

你需要先在插件根目录创建一个 `web` 文件夹, 并在里面创建一个随意名称的文件夹 (假设名为 `example`), 然后在里面创建一个 `index.html` 文件, 就是你要渲染的文件了

你可以在这个 `index.html` 文件编写你想要的代码

## 添加配置

在 `custom.yml` 文件中, 你需要添加以下配置:

```yaml
# 上面的内容 ...

test: # 随意命名, 用于区分不同的渲染功能
  enable: true # 是否启用该自定义命令
  command: ["/example"] # 用于渲染的命令
  execute: [""] # 执行的命令, 这里不需要
  unbind_execute: [""] # 未绑定的用户执行的命令, 这里不需要
  choose_account: 1 # 选择的账号, 默认为 1
  web:   # 这里是绑定后的用户渲染的内容
    path: "example" # 你刚刚创建的文件夹的名称
    width: 1920 # 图片宽度
    height: 1080 # 图片高度
    delay: 1000 # 打开页面后等待加载的延迟时间, 单位为毫秒
    placeholders: # 占位符, 用于替换 HTML 中的内容, 支持 PAPI 变量
      hello: "Hello, %player_name%!" # 在 HTML 中使用 ${hello} 占位符替换为 "Hello, World!"
  unbind_web: # 这里是未绑定的用户渲染的内容, 与上述同理
    path: "example"
    width: 1920
    height: 1080
    delay: 1000
    placeholders:
      hello: "Hello, Unbind User!"
```