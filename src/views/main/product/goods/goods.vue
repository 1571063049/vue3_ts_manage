<template>
  <div class="goods">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :tableContentConfig="tableContentConfig"
      pageName="goods"
      @handleNewClick="acceptNewClick"
      @handleEditClick="acceptEditClick"
    >
      <template #status="scope">
        <template v-if="scope.row.status === 1">
          <el-button color="#ea9da2" plain>启用</el-button>
        </template>
        <template v-else>
          <el-button type="danger" disabled>禁用</el-button>
        </template>
      </template>
      <template #imgUrl="scope">
        <el-image
          :preview-teleported="true"
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          close-on-press-escape
        />
      </template>
    </page-content>
    <page-modal
      :modalConfig="modalConfig"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="category"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { searchFormConfig } from './config/search.config'
import { tableContentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'goods',
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, acceptNewClick, acceptEditClick] =
      usePageModal()

    return {
      searchFormConfig,
      tableContentConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,
      modalConfig,
      pageModalRef,
      defaultInfo,
      acceptNewClick,
      acceptEditClick
    }
  }
})
</script>

<style scoped></style>
