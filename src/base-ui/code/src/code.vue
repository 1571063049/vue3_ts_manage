<template>
  <div class="gf-code">
    <pre class="bg">
      <code :class="'language'+language" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

import hjs from 'highlight.js'
import 'highlight.js/styles/github.css'

export default defineComponent({
  props: {
    language: {
      type: String,
      default: 'html'
    },
    code: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const highlightedCode = ref<string>('')
    watchEffect(() => {
      highlightedCode.value = hjs.highlight(props.code, {
        language: props.language
      }).value
    })
    return {
      highlightedCode
    }
  }
})
</script>

<style scoped lang="less">
.bg {
  padding: 10px;
  text-align: left;
  background: #303845;
  color: cyan;
}
</style>
