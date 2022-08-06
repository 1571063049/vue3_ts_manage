import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'

import { getPageListData } from '@/service/main/system'

import login from './login/login'
import system from './main/system/system'
import dashboard from './main/analysis/dashboard'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'gaofeng',
      age: 189,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  getters: {},
  mutations: {
    changeDepartmentList(state, department: any) {
      state.entireDepartment = department
    },
    changeRoleList(state, role: any) {
      state.entireRole = role
    },
    changeMenuList(state, role: any) {
      state.entireMenu = role
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      // 获取数据
      commit('changeDepartmentList', departmentList)
      commit('changeRoleList', roleList)
      commit('changeMenuList', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // 请求时异步的，所以当退出登录时，token可能还未请求
  // store.dispatch('getInitialDataAction')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
