<template>
  <div class="overview">
    <gf-card title="关于">
      <div>
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </gf-card>
    <gf-card title="技术栈">
      <gf-text-link :textArray="technologyStack"></gf-text-link>
      <gf-descriptions
        title="开发依赖"
        :column="2"
        :tableDesctipt="developmentDependence"
      >
      </gf-descriptions>
      <gf-descriptions
        title="生产依赖"
        :column="2"
        :tableDesctipt="productionDependence"
      >
      </gf-descriptions>
    </gf-card>
    <gf-card title="项目结构">
      <gf-code language="bash" :code="projectDircetory"></gf-code>
    </gf-card>
    <gf-card title="项目规范">
      <gf-descriptions
        title="文件命名规范"
        :column="1"
        :tableDesctipt="fileNamedtStandard"
      >
      </gf-descriptions>
      <gf-descriptions
        title="组件编写规范"
        :column="1"
        :tableDesctipt="writeComponenttStandard"
      >
      </gf-descriptions>
    </gf-card>
    <gf-card title="Git提交规范">
      <gf-descriptions
        title="Git提交规范"
        :column="1"
        :tableDesctipt="gitCommitStandard"
      >
      </gf-descriptions>
    </gf-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import GfCard from '@/components/card'
import GfTextLink from '@/base-ui/text-link'
import GfDescriptions from '@/base-ui/descriptions'
import GfCode from '@/base-ui/code'

import {
  technologyStack,
  productionDependence,
  developmentDependence,
  gitCommitStandard,
  fileNamedtStandard,
  writeComponenttStandard,
  projectDircetory
} from './config'

export default defineComponent({
  components: {
    GfCard,
    GfTextLink,
    GfDescriptions,
    GfCode
  },
  name: 'overview',
  setup() {
    return {
      technologyStack,
      productionDependence,
      developmentDependence,
      gitCommitStandard,
      fileNamedtStandard,
      writeComponenttStandard,
      projectDircetory
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  background-color: #f5f5f5;
  .description {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 600;
      color: #e99096;
    }
  }
}
</style>
