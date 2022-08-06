<template>
  <div class="gf-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth" ref="formRef">
      <el-row>
        <template v-for="item in formItems" :key="item.babel">
          <el-col v-bind="colLayout">
            <el-form-item
              :style="itemStyle"
              :label="item.label"
              v-if="!item.isHidden"
            >
              <template
                v-if="
                  item.type === 'input' ||
                  item.type === 'password' ||
                  item.type === 'id'
                "
              >
                <el-input
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="handleModelValue($event, item.field)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[item.field]"
                  @update:modelValue="handleModelValue($event, item.field)"
                >
                  <el-option
                    v-for="opiton in item.options"
                    :key="opiton.value"
                    :value="opiton.value"
                    >{{ opiton.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 450px"
                  type="datetimerange"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleModelValue($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { ElForm } from 'element-plus'
import { IFormItem } from '../types'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '20px 40px'
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    labelWidth: {
      type: String,
      defalut: '100px'
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // 表单验证
    const formRef = ref<InstanceType<typeof ElForm>>()

    formRef.value?.validate((valid) => {
      console.log(valid)
    })

    // 方法一: 看似可以，实则会直接修改props.modelValue里面的值
    // const formData = computed({
    //   get: () => props.modelValue,
    //   set: (newValue: any) => {
    //     console.log(newValue) //不会触发
    //     emit('update:modelValue', newValue)
    //   }
    // })

    //真正的双向绑定----将props.modelValue 进行字面量增强 浅拷贝到ref对象在赋值给formData
    // const formData = ref({ ...props.modelValue })
    // formData.value.age = 19
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit('update:modelValue', newValue)
    //   },
    //   { deep: true }
    // )

    //不用v-model进行双向绑定,v-model为下面写法的语法糖
    // v-model="formData[`${item.field}`]"

    // 而是用:modelValue="formData[`${item.field}`]" :@updata:modelValue="handleModelValue"

    const handleModelValue = (value: string, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }

    return { handleModelValue }
  }
})
</script>

<style scoped lang="less">
.gf-form {
  padding-top: 18px;
  font-weight: 700;
  color: #e99096;
  .header {
    text-align: center;
  }
  .footer {
    text-align: end;
  }
}
</style>
