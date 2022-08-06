<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleResetClick="acceptResetClick"
      @handleQueryClick="acceptQueryClick"
    ></page-search>
    <page-content
      :tableContentConfig="tableContentConfig"
      pageName="department"
      @handleNewClick="acceptNewClick"
      @handleEditClick="acceptEditClick"
      ref="pageContentRef"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="department"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
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
  name: 'department',
  setup() {
    const [pageContentRef, acceptResetClick, acceptQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, acceptNewClick, acceptEditClick] =
      usePageModal()

    return {
      pageContentRef,
      acceptResetClick,
      acceptQueryClick,
      searchFormConfig,
      tableContentConfig,
      pageModalRef,
      defaultInfo,
      acceptNewClick,
      acceptEditClick,
      modalConfig
    }
  }
})
</script>

<style scoped></style>
