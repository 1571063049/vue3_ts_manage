<template>
  <div class="card">
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="card-body">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'card',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.card {
  box-shadow: 0 2px 12px 0 rgba(161, 148, 148, 0.2);
  margin-bottom: 20px;
  .card-header {
    font-weight: 600;
  }
}
</style>
