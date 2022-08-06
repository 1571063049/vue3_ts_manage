<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
      @handleQueryClick="handleQueryClick"
    ></page-search>
    <page-content
      :tableContentConfig="tableContentConfig"
      pageName="category"
      ref="pageContentRef"
      @handleNewClick="acceptNewClick"
      @handleEditClick="acceptEditClick"
    ></page-content>
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
  name: 'category',
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
