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
        xl: 6, // >1920px 4???
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
    // ????????????
    const formRef = ref<InstanceType<typeof ElForm>>()

    formRef.value?.validate((valid) => {
      console.log(valid)
    })

    // ?????????: ????????????????????????????????????props.modelValue????????????
    // const formData = computed({
    //   get: () => props.modelValue,
    //   set: (newValue: any) => {
    //     console.log(newValue) //????????????
    //     emit('update:modelValue', newValue)
    //   }
    // })

    //?????????????????????----???props.modelValue ????????????????????? ????????????ref??????????????????formData
    // const formData = ref({ ...props.modelValue })
    // formData.value.age = 19
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit('update:modelValue', newValue)
    //   },
    //   { deep: true }
    // )

    //??????v-model??????????????????,v-model???????????????????????????
    // v-model="formData[`${item.field}`]"

    // ?????????:modelValue="formData[`${item.field}`]" :@updata:modelValue="handleModelValue"

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
