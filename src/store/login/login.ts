import { Module } from 'vuex'
import router from '@/router'

import { IRootState } from '../types'
import { IIoginState } from './types'
import { IAccount } from '@/service/login/types'

import {
  accountLoginRequest,
  phoneLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

import localCache from '@/utils/cache'
import { mapManusToRoutes, mapMenusToPermissions } from '@/utils/map-menus'

const loginModule: Module<IIoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeuserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 动态加载路由
      // 1.获取当前用户的路由规则
      const routes = mapManusToRoutes(userMenus)

      // 2.将路由动态添加到main.children中
      for (const route of routes) {
        router.addRoute('main', route)
      }

      // 获取当前用户的权限菜单
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 验证用户
      const accountLoginResult = await accountLoginRequest(payload)
      const { token, id } = accountLoginResult.data
      commit('changeToken', token)
      // token 过期为一个月，如果让前端来判断，则可以将token放入对象中，添加一个endTime时间属性
      // const endTime = new Date()
      // localCache.setCache('token', { token, endTime })
      localCache.setCache('token', token)

      // 发送初始化的请求(完整的role/department)
      dispatch('getInitialDataAction', {}, { root: true })

      // 2.请求用户信息
      const UserInfoResult = await requestUserInfoById(id)
      const userInfo = UserInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单信息
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeuserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      //4. 跳转到首页
      router.push('/main')
    },

    async phoneLoginAction({ dispatch }) {
      const phoneLoginResult = await phoneLoginRequest()
      //授权成功~
      if (phoneLoginResult) {
        dispatch('accountLoginAction', {
          name: localCache.getCache('name'),
          password: localCache.getCache('password')
        })
      }
    },

    // 本地刷新时保存vuex中的状态
    async loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
        // 发送初始化的请求(完整的role/department)
        dispatch('getInitialDataAction', {}, { root: true })
      } else {
        // token过期重新请求token
        dispatch('accountLoginAction', {
          name: localCache.getCache('name'),
          password: localCache.getCache('password')
        })
      }

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeuserMenus', userMenus)
      }
    }
  }
}

export default loginModule
