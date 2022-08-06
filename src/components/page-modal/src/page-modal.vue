<template>
  <div class="page-modal">
    <el-dialog
      v-model="DialogVisible"
      :title="title"
      width="30%"
      center
      destroy-on-close
    >
      <gf-form v-bind="modalConfig" v-model="formData"> </gf-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import { useStore } from '@/store'

import GfForm from '@/base-ui/form'

export default defineComponent({
  components: {
    GfForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      defalut: () => ({})
    },
    pageName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const DialogVisible = ref(false)
    const title = '新建' + props.modalConfig.title
    const formData = ref<any>({})
    watch(
      // watch 监听ref对象必须是函数写法，如果是对象，则得写getter/setter
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
        //错误写法----因为createAt和updateAt时不需要传入给后端的，而是由后端返回，多传入则会报错，而且新建时没有选择时间
        // formData.value = { ...newValue }
      }
    )

    //确定按钮的逻辑判断

    const store = useStore()
    const handleConfirmClick = () => {
      DialogVisible.value = false
      // 编辑
      if (Object.keys(props.defaultInfo).length) {
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return {
      DialogVisible,
      title,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
