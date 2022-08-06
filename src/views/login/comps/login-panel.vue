<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>

    <el-tabs type="border-card" stretch v-model="selectTabs">
      <el-tab-pane name="name">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="label-icon"><UserFilled /></el-icon>
            <span>账号密码登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="password">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="label-icon"><Cellphone /></el-icon>
            <span>手机短信登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="password-control">
      <el-checkbox v-model="isisKeepPassword" class="keep-password"
        >记住密码</el-checkbox
      >
      <el-link class="forget-password">忘记密码</el-link>
    </div>

    <el-button
      color="#e99096"
      class="login-btn"
      size="large"
      @click="hanldeLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    //1.设置变量
    const isisKeepPassword = ref(true)
    const selectTabs = ref('name')

    // typeof LoginAccount 拿到对象的类型
    // InstanceType<typeof LoginAccount> 拿到对象实例的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    // 2.设置方法
    const hanldeLoginClick = () => {
      // 如果ref()里面不传值，默认是any类型，但不推荐
      // console.log(accountRef.value.loginAction)
      if (selectTabs.value === 'name') {
        accountRef.value?.loginAccountAction(isisKeepPassword.value)
      } else {
        phoneRef.value?.loginPhoneAction(isisKeepPassword.value)
      }
    }

    return {
      isisKeepPassword,
      selectTabs,
      accountRef,
      phoneRef,

      hanldeLoginClick
    }
  }
})
</script>

<style scoped lang="less">
@com_color: #e99096;
.login-panel {
  width: 340px;
  margin-top: -200px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #fff;
  .title {
    text-align: center;
    color: @com_color;
  }
  .el-tabs {
    --el-tabs-header-height: 50px;
  }
  .el-tabs--border-card {
    border: -1px solid var(--el-border-color);
  }
  .custom-tabs-label {
    position: relative;
    font-weight: 550;
    color: @com_color;
    .label-icon {
      position: absolute;
      top: 0px;
      left: -22px;
      font-size: 18px;
      margin-right: 5px;
    }
  }
  .password-control {
    margin: -10px 0 10px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    .keep-password {
      color: @com_color;
      --el-checkbox-bg-color: @com_color;
      --el-checkbox-text-color: @com_color;

      --el-checkbox-checked-bg-color: var(--el-color-danger);
      --el-checkbox-checked-text-color: var(--el-color-danger);
      --el-checkbox-checked-text-color: var(--el-color-danger);
      --el-checkbox-checked-input-border-color: var(--el-color-danger);
    }
    .forget-password {
      color: @com_color;
      --el-link-hover-text-color: var(--el-color-danger);
      &:hover {
        text-decoration: none;
        color: #f56c6c;
      }
    }
  }

  .login-btn {
    width: 100%;
    border-radius: 0 0 5px 5px;
    color: #fff;
    font-weight: 600;
  }
}
</style>
