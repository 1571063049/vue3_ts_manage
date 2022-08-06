<template>
  <div class="chat">
    <gf-editor v-model:value="htmlString"></gf-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import GfEditor from '@/base-ui/editor'

export default defineComponent({
  components: { GfEditor },
  name: 'chat',
  setup() {
    const htmlString = ref<string>('share your story')
    return { htmlString }
  }
})
</script>

<style scoped lang="less">
.chat {
  margin-top: 10px;
}
</style>
