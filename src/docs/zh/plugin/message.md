# 消息配置

<!--suppress HtmlUnknownAttribute -->
<script setup>
import ConfigViewer from "../../../components/ConfigViewer.vue";
import { data } from "../../../config-spec/message/zh.data.mts";
</script>

消息在 `plugins/AQQBot/messages.yml` 内配置

:::tip 提示
点击配置行查看具体说明
:::

<ConfigViewer :data=data name="messages.yml"></ConfigViewer>