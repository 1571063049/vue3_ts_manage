<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleResetClick="acceptResetClick"
      @handleQueryClick="acceptQueryClick"
    />
    <page-content
      :tableContentConfig="tableContentConfig"
      pageName="users"
      ref="pageContentRef"
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
    </page-content>
    <page-modal
      ref="pageModalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { searchFormConfig } from './config/search.config'
import { tableContentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  setup() {
    const [pageContentRef, acceptResetClick, acceptQueryClick] = usePageSearch()

    // 1.处理password 隐藏的逻辑
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }

    // 2.动态添加部门和角色列表
    const store = useStore()
    // 获取动态vuex中的数据添加到modalConfig配置文件中，当此页面刷新时，数据无法及时响应，此时应该对vuex中的动态数据放入
    // 计算属性中进行监听，如果修改则返回modalConfig以及时更新
    // 以后遇到动态数据需要进行刷新的情形  都可以按照上述方法进行解决
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      if (departmentItem?.options) {
        departmentItem.options = store.state.entireDepartment.map(
          (item: any) => {
            return { title: item.name, value: item.id }
          }
        )
      }

      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      if (roleItem?.options) {
        roleItem.options = store.state.entireRole.map((item: any) => {
          return { title: item.name, value: item.id }
        })
      }
      return modalConfig
    })

    const [pageModalRef, defaultInfo, acceptNewClick, acceptEditClick] =
      usePageModal(newCallBack, editCallBack)

    return {
      searchFormConfig,
      tableContentConfig,
      pageContentRef,
      acceptResetClick,
      acceptQueryClick,
      pageModalRef,
      defaultInfo,
      acceptNewClick,
      acceptEditClick,
      modalConfig,
      modalConfigRef
    }
  }
})
</script>

<style scoped lang="less"></style>
