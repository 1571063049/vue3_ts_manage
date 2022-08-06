<template>
  <div class="nav-manu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!collapse">Vue+TS</span>
    </div>
    <el-menu
      background-color="#e99096"
      text-color="#375e7c"
      active-text-color="#42a5f5"
      class="el-menu-vertical"
      :collapse="collapse"
      :default-active="defaultValue"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <template v-if="item.icon === 'el-icon-monitor'">
                <el-icon><Monitor /></el-icon>
              </template>
              <template v-else-if="item.icon === 'el-icon-setting'">
                <el-icon><Setting /></el-icon>
              </template>
              <template v-else-if="item.icon === 'el-icon-goods'">
                <el-icon><Goods /></el-icon>
              </template>
              <template v-else-if="item.icon === 'el-icon-chat-line-round'">
                <el-icon><ChatLineRound /></el-icon>
              </template>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="menuitem in item.children" :key="menuitem.id">
              <el-menu-item
                :index="menuitem.id + ''"
                @click="handleToAimPath(menuitem.url)"
              >
                <i v-if="menuitem.icon" :class="item.icon"></i>
                <span>{{ menuitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'
export default defineComponent({
  props: {
    collapse: {
      Type: Boolean,
      default: false
    }
  },
  setup() {
    // store
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    // router
    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path

    // data menu
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')
    // event handle
    const handleToAimPath = (path: string) => {
      router.push(path)
    }
    return {
      userMenus,
      handleToAimPath,
      defaultValue
    }
  }
})
</script>

<style scoped lang="less">
.nav-manu {
  height: 100%;
  font-weight: 600;
  background-color: #e99096;
  .logo {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    height: 28px;
    line-height: 28px;
    padding: 12px 10px 8px 10px;
    .img {
      height: 100%;
      margin-left: 2px;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      color: white;
      margin-left: 20px;
    }
  }

  .el-menu-vertical {
    height: calc(100% - 48px);
    width: 100%x;
    border-right: none;
    .el-menu-item.is-active {
      color: #aaddbb;
    }
  }
}
</style>
