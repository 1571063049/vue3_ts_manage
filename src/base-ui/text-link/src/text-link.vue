<template>
  <div class="text-link">
    <template v-for="(item, index) in textArray" :key="index">
      <div class="text-content">
        <span class="text-title">{{ item.title }} : </span>
        <span>
          <el-link type="danger">{{ item.desp }}</el-link>
        </span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    textArray: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.text-link {
  margin-bottom: 20px;
  .text-content {
    padding: 8px 10px;
    &:hover {
      background-color: #f0e4e4;
    }
    .text-title {
      margin: 0 10px;
      position: relative;
      &::before {
        position: absolute;
        top: 8px;
        left: -10px;
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #e99096;
      }
    }
  }
}
</style>
