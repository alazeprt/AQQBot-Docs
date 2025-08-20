# Debug 模式

Debug 模式用于调试插件, 在反馈插件问题时可能会用到, 目前仅有日志记录一个功能

Debug 模式在 `config.yml` 的最下部:

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