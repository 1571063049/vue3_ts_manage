<template>
  <div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar
          class="el-dropdown-icon"
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        {{ name }}
        <el-icon class="el-icon--right">
          <CaretBottom />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="dropdown-menu">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">用户管理</el-dropdown-item>
          <el-dropdown-item command="c">角色管理</el-dropdown-item>
          <el-dropdown-item command="d" divided>
            退出登录
            <Delete style="width: 1em; height: 1em; margin-left: 4px" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

export default defineComponent({
  emits: ['FoldChange'],
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)
    const handleCommand = (command: string | number) => {
      switch (command) {
        case 'a':
          console.log(name)
          break
        case 'b':
          router.push('/main/system/user')
          break
        case 'c':
          router.push('/main/system/role')
          break
        case 'd':
          localCache.deleteCache('token')
          router.push('/main')
          break
      }
    }
    return {
      name,
      handleCommand
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  .el-dropdown-icon {
    margin-right: 8px;
  }
}
.dropdown-menu {
  // --el-dropdown-menu-box-shadow: var(--el-box-shadow-light);
  --el-dropdown-menuItem-hover-color: #e99096;
}
</style>
