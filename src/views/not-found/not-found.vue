<template>
  <div class="not-found">
    <h2>你输入的网址有，该页面无结果，请点击按钮返回上一次页面</h2>
    <h2>Not Found</h2>
    <img src="~@/assets/img/no-search.png" alt="" />
    <el-button class="button" @click="handleToBackPage" type="danger"
      >返回主页</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleToBackPage = () => {
      router.back()
    }
    return {
      handleToBackPage
    }
  }
})
</script>

<style scoped lang="less">
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e99096;
  font-weight: 700;
  margin-top: -50px;
  .button {
    margin-top: 20px;
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
