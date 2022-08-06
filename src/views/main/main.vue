<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @FoldChange="FoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer>
          Well Come To GaoFeng BackGound Managemegnt System
          <el-icon class="footer-icon">
            <WindPower />
          </el-icon>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavHeader from '../../components/nav-header/src/nav-header.vue'
import NavMenu from '../../components/nav-manu/src/nav-manu.vue'

export default defineComponent({
  components: {
    NavHeader,
    NavMenu
  },
  setup() {
    const isCollapse = ref(false)
    const FoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      FoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  color: #e99096;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;

  .main-content,
  .page {
    width: 100%;
    height: 100%;
  }

  .page-content {
    height: calc(100% - 48px);
    width: 100%;

    .page-info {
      border-radius: 5px;
      background-color: #fff;
    }
  }

  .el-header,
  .el-footer {
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
    padding: 0;
  }
  .el-footer {
    justify-content: center;
    background-color: #fff;
    .footer-icon {
      color: #e99096;
      font-weight: 700;
      font-size: 20px;
      margin-left: 5px;
    }
  }
  .el-header,
  .el-footer {
    height: 48px !important;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
