<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
      @handleQueryClick="handleQueryClick"
    ></page-search>
    <page-content
      :tableContentConfig="tableContentConfig"
      pageName="role"
      ref="pageContentRef"
      @handleNewClick="acceptNewClick"
      @handleEditClick="acceptEditClick"
    ></page-content>
    <page-modal
      :modalConfig="modalConfig"
      pageName="role"
      ref="pageModalRef"
      :otherInfo="otherInfo"
      :defaultInfo="defaultInfo"
    >
      <div class="tree">
        <el-tree
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          ref="treeRef"
          @check="handleCheckedClick"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'

import { useStore } from 'vuex'

import { searchFormConfig } from './config/search.config'
import { tableContentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

import { mapMenusToLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  setup() {
    const store = useStore()
    // 1.获取所有菜单信息
    const menus = computed(() => store.state.entireMenu)

    // 2.获取ELTree树组件对象
    const treeRef = ref<InstanceType<typeof ElTree>>()

    // 监听edit的点击事件，将ELTree树组件对象进行回写
    const EditCallback = (item: any) => {
      nextTick(() => {
        const LeafKeys = mapMenusToLeafKeys(item.menuList)
        treeRef.value?.setCheckedKeys(LeafKeys, false)
      })
    }

    // 3.点击treeChecked，将选中的节点的id存入数组中
    const otherInfo = ref({})
    const handleCheckedClick = (allNodesObj: any, checkedNodeObj: any) => {
      // 获取全选中节点
      const checkedNodes = checkedNodeObj.checkedKeys
      const halfCheckedNodes = checkedNodeObj.halfCheckedKeys
      const menuList: number[] = [...checkedNodes, ...halfCheckedNodes]
      otherInfo.value = { menuList }
    }

    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, acceptNewClick, acceptEditClick] =
      usePageModal(undefined, EditCallback)

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
      acceptEditClick,
      menus,
      treeRef,
      EditCallback,
      handleCheckedClick,
      otherInfo
    }
  }
})
</script>

<style scoped lang="less">
.tree {
  padding-left: 97px;
}
</style>
