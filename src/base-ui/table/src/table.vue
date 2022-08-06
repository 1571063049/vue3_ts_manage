<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}列表</div>
        <slot name="headerHandler"></slot>
      </slot>
    </div>
    <el-table
      class="table-content"
      :data="pageList"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="80"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.name">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-model:currentPage="page.currentPage"
        v-model:page-size="page.pageSize"
        :page-sizes="[10, 20, 30]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageCount"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IPropList } from '../types'

export default defineComponent({
  props: {
    pageList: {
      type: Array,
      require: true
    },
    pageCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array as PropType<IPropList[]>,
      require: true
    },
    title: {
      type: String,
      defalut: ''
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      defalut: () => ({
        currentPage: 1,
        pageSize: 10
      })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page', 'selectionChange'],
  setup(props, { emit }) {
    // 选择当前的行时出发
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.table {
  padding: 30px;
  border-top: 20px solid #f5f5f5;
  font-weight: 500;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .title {
      font-weight: 600;
      margin-left: 10px;
    }
  }
  .table-content {
    line-height: 60px;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
