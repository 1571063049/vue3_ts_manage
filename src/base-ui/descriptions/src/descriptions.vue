<template>
  <div class="description">
    <el-descriptions :title="title" :column="column" border>
      <template v-for="(itemData, index) in tableDesctipt" :key="index">
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              {{ itemData.name }}
            </div>
          </template>
          <el-tag size="small" type="danger">{{ itemData.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    column: {
      type: Number,
      default: 2
    },
    tableDesctipt: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less"></style>
