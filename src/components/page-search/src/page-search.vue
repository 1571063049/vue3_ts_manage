<template>
  <div class="search">
    <gf-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级查询</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button size="large" @click="handleResetClick">
            <el-icon>
              <Refresh />
            </el-icon>
            重置
          </el-button>
          <el-button size="large" type="primary" @click="handleQueryClick">
            <el-icon>
              <Search />
            </el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </gf-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import GfForm from '@/base-ui/form'
import { useStore } from '@/store'
export default defineComponent({
  components: { GfForm },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['handleResetClick', 'handleQueryClick'],
  setup(props, { emit }) {
    const store = useStore()

    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一: formData中的属性应该动态来决定
    const originFormData: any = {}
    const formItems = props.searchFormConfig?.formItems ?? []

    for (const item of formItems) {
      originFormData[item.field] = ''
    }

    const formData = ref(originFormData)
    // 监听formData的变化，将formData保存在vuex中，以便其他组件查询数据时可以获得查询请求
    watch(formData, () => {
      store.commit('system/changeFormData', formData.value)
    })

    // 优化二当用户点击重置
    const handleResetClick = () => {
      // 方法一: Form里面使用v-modele将l-input双向绑定formData里面的属性
      // From 里面的modelValue数据为空，page-search里面的formData数据也为空，但是el-input里面的内容还在显示不为空
      // 因为el-input和Form里面的formData进行了双向绑定，但是formData是{ ...props.modelValue }浅拷贝的对象，所以和modelValue无关
      // 但是我不理解为啥 formData.value[`${key}`] = originFormData[key] 可以做到让Form里面的formData变为空呢
      // 懂了，watch监听器会监听Form里面的formData的变化，然后将Form里面的formData的值，也就是它的引用赋值给page-search里面的formData
      // 所以说如果 formData.value = originFormData ，只会影响page-search里面的formData，而不会影响Form里面的formData
      // 而通过page-search里面的formData，也就是对象的引用去修改里面的值，那么Form里面的formData的值则会发生改变

      // 当然，用老师说的第二种方法，From里面不用v-model实现双向绑定会更好理解一些，就用:model-Value=model-Value @uptate:modelValue=""也行
      // formData.value = originFormData //不发生Form里面的formData不发生修改
      // for (const key in originFormData) {
      //   formData.value[`${key}`] = originFormData[key]
      // }

      // 方法二:Form里面使用:model-Value=model-Value @uptate:modelValue="handleModelValue" 双向绑定formData里面的属性
      formData.value = originFormData

      emit('handleResetClick')
    }

    const handleQueryClick = () => {
      emit('handleQueryClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.footer {
  padding: 20px 50px 30px 0;
}
</style>
