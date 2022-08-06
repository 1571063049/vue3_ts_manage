<template>
  <div class="nav-header">
    <div class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold">
        <DArrowLeft />
      </template>
      <template v-else>
        <DArrowRight />
      </template>
    </div>
    <div class="nav-content">
      <bread-crumb :breadcrumbs="breadCrumbs" />
      <div class="right">
        <div class="nav-menu">
          <CollectionTag style="widht: 20px; height: 20px" />
          <ChatDotRound style="widht: 20px; height: 20px" />
          <div class="menu-bell">
            <span class="dot"></span>
            <Bell style="widht: 20px; height: 20px" />
          </div>
        </div>
        <nav-user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import NavUserInfo from '../comps/nav-user-info.vue'
import BreadCrumb from '@/base-ui/bread-crumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: { NavUserInfo, BreadCrumb },
  emits: ['FoldChange'],
  setup(props, { emit }) {
    // store
    const store = useStore()
    const userMenus = store.state.login.userMenus

    // router
    const route = useRoute()

    // data
    const isFold = ref(false)
    // 面包屑的数据: [{name: , path: }]
    const breadCrumbs = computed(() => {
      const currentPath = route.path //动态获取当前路径
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    // handle event
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('FoldChange', isFold.value)
    }
    return {
      isFold,
      breadCrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  height: 48px;
  display: flex;
  background-color: #ffffff;
  font-weight: 600;
  align-items: center;
  .fold-menu {
    color: #e78f95;
    width: 38px;
    height: 38px;
    font-weight: 700;
  }

  .nav-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .right {
      display: flex;
      justify-content: flex-end;
      .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100px;
        height: 23px;
        position: relative;
        margin-right: 27px;
        .menu-bell {
          width: 20px;
          height: 20px;
          cursor: pointer;
          .dot {
            position: absolute;
            top: 0px;
            right: -2px;
            z-index: 10;
            width: 6px;
            height: 6px;
            background: #f00919;
            border-radius: 100%;
          }
        }
      }
    }
  }
}
</style>
