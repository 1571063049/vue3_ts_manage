import * as echarts from 'echarts'

import chinaMapData from '../data/china.json'

export function useInitEchart(el: HTMLElement) {
  echarts.registerMap('china', chinaMapData)

  const echartInstance = echarts.init(el)
  const setOptions = (option: any) => {
    echartInstance.setOption(option)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
