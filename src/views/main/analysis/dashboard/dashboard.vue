<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <gf-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsData"></pie-echart>
        </gf-card>
      </el-col>
      <el-col :span="10">
        <gf-card title="不同城市商品销量(china)">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </gf-card>
      </el-col>
      <el-col :span="7">
        <gf-card title="分类商品数量(玫瑰图)">
          <rose-echart :pieData="categoryGoodsData"></rose-echart>
        </gf-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <gf-card title="分类商品销售(饼图)">
          <line-echart
            title="goods Sale"
            v-bind="categoryGoodsSale"
          ></line-echart>
        </gf-card>
      </el-col>
      <el-col :span="12">
        <gf-card title="分类商品收藏(china)">
          <bar-echart
            title="goods Favor"
            v-bind="categoryGoodsFavor"
          ></bar-echart>
        </gf-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '@/store'

import GfCard from '@/components/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  components: {
    GfCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  name: 'dashboard',
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    // 饼图 / 玫瑰图
    const categoryGoodsData = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((goods: any) => {
        return { name: goods.name, value: goods.goodsCount }
      })
    })

    // 折线图图
    const categoryGoodsSale = computed(() => {
      const categorySale = store.state.dashboard.categoryGoodsSale
      const dataAxis: string[] = []
      const values: any[] = []

      for (const goods of categorySale) {
        dataAxis.push(goods.name)
        values.push(goods.goodsCount)
      }
      return {
        dataAxis,
        values
      }
    })

    // 柱状图
    const categoryGoodsFavor = computed(() => {
      const categoryFavor = store.state.dashboard.categoryGoodsFavor
      const dataAxis: string[] = []
      const values: any[] = []

      for (const goods of categoryFavor) {
        dataAxis.push(goods.name)
        values.push(goods.goodsFavor)
      }
      return {
        dataAxis,
        values
      }
    })

    // 中国地图
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((goods) => {
        return { name: goods.address, value: goods.count }
      })
    })
    return {
      categoryGoodsData,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less"></style>
