<template>
  <div class="list">
    <page-content
      pageName="story"
      :tableContentConfig="tableContentConfig"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { tableContentConfig } from './config/content.config'

export default defineComponent({
  name: 'list',
  setup() {
    return { tableContentConfig }
  }
})
</script>

<style scoped></style>
