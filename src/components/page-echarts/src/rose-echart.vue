<template>
  <div class="rose-echart">
    <base-echart :option="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, withDefaults } from 'vue'

import { IDataType } from '../types'

import BaseEchart from '@/base-ui/echarts'

const props = withDefaults(
  defineProps<{
    title?: string
    pieData: IDataType
  }>(),
  {
    title: ''
  }
)

const option = computed(() => {
  return {
    title: {
      text: props.title
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.pieData
      }
    ]
  }
})
</script>

<style scoped></style>
