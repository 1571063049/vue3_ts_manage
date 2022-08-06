<template>
  <div class="login-phone">
    <el-form label-width="65px" :model="phoneInfo" :rules="rules" ref="formRef">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phoneInfo.number" class="phone-input" />
      </el-form-item>
      <el-form-item label="验证码" prop="vericode">
        <div class="veri-code">
          <el-input
            type="password"
            v-model="phoneInfo.vericode"
            class="phone-input"
          />
          <el-button type="primary" color="#e99096" class="get-code"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { rules } from '../config/phone-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const phoneInfo = reactive({
      number: localCache.getCache('phone') ?? '',
      vericode: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginPhoneAction = (isisKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isisKeepPassword) {
            localCache.setCache('phone', phoneInfo.number)
          } else {
            localCache.deleteCache('phone')
          }

          // 手机验证登录
          store.dispatch('login/phoneLoginAction')
        }
      })
    }
    return {
      phoneInfo,
      rules,
      formRef,

      loginPhoneAction
    }
  }
})
</script>

<style scoped lang="less">
.el-form-item {
  margin-bottom: 24px;
}
.veri-code {
  display: flex;
  justify-content: space-between;
  .get-code {
    margin-left: 20px;
    color: #fff;
    border-radius: 0px;
    font-weight: 600;
    &:hover {
      border-radius: 5px;
    }
  }
}
</style>
