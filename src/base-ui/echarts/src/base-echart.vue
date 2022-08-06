<template>
  <div class="base-chart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import { useInitEchart } from '../hooks/use-init-echart'

const echartDivRef = ref<HTMLElement>()
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  {
    width: '100%',
    height: '380px'
  }
)

onMounted(() => {
  const { setOptions } = useInitEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.option)
  })
})
</script>

<style scoped></style>
