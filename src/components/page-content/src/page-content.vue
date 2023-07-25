<template>
  <div class="page-content">
    <gf-table
      :pageList="pageList"
      :pageCount="pageCount"
      v-bind="tableContentConfig"
      v-model:page="pageInfo"
      @selectionChange="selectionChange"
    >
      <!-- header -->
      <template #headerHandler>
        <div class="header-btns">
          <el-button type="success" v-if="isCreate" @click="handleNewClick">
            新建{{ tableContentConfig.title }}
          </el-button>
          <el-button type="info" v-if="isQuery" @click="handleQueryClick">
            查询{{ tableContentConfig.title }}
          </el-button>
          <el-button
            type="danger"
            v-if="isDelete"
            @click="handleDeleteSelectClick"
          >
            删除选择用户
          </el-button>
        </div>
      </template>
      <!-- 公用动态插槽 -->
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handle="scope">
        <div class="handle-btns">
          <el-button
            type="primary"
            size="small"
            plain
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
          >
            <el-icon> <Edit /> </el-icon>编辑</el-button
          ><el-button
            type="info"
            size="small"
            @click="handleDeleteData(scope.row)"
            ><el-icon><Delete /></el-icon>删除</el-button
          >
        </div>
      </template>
      <!-- 其他动态插槽 -->
      <template
        v-for="(item, index) in otherPropsName"
        :key="index"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </gf-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'

import GfTable from '@/base-ui/table'

import { usePermission } from '@/hooks/use-permission'

export default defineComponent({
  components: { GfTable },
  props: {
    pageName: {
      type: String,
      required: true
    },
    tableContentConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['handleNewClick', 'handleEditClick'],
  setup(props, { emit }) {
    const store = useStore()
    // 0.获取用户按钮权限
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')

    // 1.双向绑定pageInfo
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })

    //监听pageInfo的改变，实时获取页面数据以及以及将pageInfo保存子啊vuex中，以便其他组件使用
    watch(pageInfo, () => {
      getPageData()
      store.commit('system/changePageInfo', pageInfo.value)
    })

    //  2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery && props.pageName !== 'story') return
      store.dispatch('system/getPageListDataAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3.获取用户数据
    const pageList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    const pageCount = computed(() =>
      store.getters[`system/pageCountData`](props.pageName)
    )

    // 4.获取其他动态插槽名称
    const otherPropsName = props.tableContentConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handle') return false
        return true
      }
    )

    // 5.获取选中的数据的id，进行全部删除
    const idArray = ref<number[]>([])
    const selectionChange = (value: any) => {
      idArray.value = []
      value.forEach((item: any) => {
        idArray.value.push(item.id)
      })
    }
    //  删除选中的所有数据
    const handleDeleteSelectClick = () => {
      for (const id of idArray.value) {
        store.dispatch('system/deletePageDataAction', {
          pageName: props.pageName,
          id
        })
      }
    }

    // 6.删除/编辑/新建操作
    //删除
    const handleDeleteData = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }

    // 编辑
    const handleEditClick = (item: any) => {
      emit('handleEditClick', item)
    }
    //新建
    const handleNewClick = () => {
      emit('handleNewClick')
    }
    // 查询------自己新加的---和新建一样，只不过是请求用户数据罢了
    const handleQueryClick = () => {
      console.log('handleQueryClick')
    }

    return {
      pageList,
      getPageData,
      pageCount,
      pageInfo,
      otherPropsName,
      isCreate,
      isDelete,
      isUpdate,
      isQuery,
      selectionChange,
      idArray,
      handleDeleteData,
      handleDeleteSelectClick,
      handleEditClick,
      handleNewClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
