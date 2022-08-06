<template>
  <div class="login-account">
    <el-form
      label-width="65px"
      :rules="rules"
      :model="accountInfo"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountInfo.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          show-password
          v-model="accountInfo.password"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    // 1.定义变量
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()

    const accountInfo = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    // 2.定义函数
    const loginAccountAction = (isisKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否需要记住密码

          if (isisKeepPassword) {
            localCache.setCache('name', accountInfo.name)
            localCache.setCache('password', accountInfo.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }

          // 2.开始进行验证登录
          store.dispatch('login/accountLoginAction', { ...accountInfo })
        }
      })
    }

    return {
      accountInfo,
      rules,
      formRef,
      loginAccountAction
    }
  }
})
</script>

<style scoped lang="less">
.el-form-item {
  margin-bottom: 24px;
}
</style>
