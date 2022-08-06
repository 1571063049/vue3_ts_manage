import { Module } from 'vuex'

import { ISystemState } from './types'
import { IRootState } from '@/store/types'
import { PageListData } from '@/service/main/system/types'

import {
  editPageData,
  createPageData,
  deletePageData,
  getPageListData
} from '@/service/main/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0,
      storyList: [],
      storyCount: 0,
      pageInfo: {
        offset: 0,
        size: 10
      },
      formData: {}
    }
  },
  mutations: {
    // 用户
    changePageUsersList(state, list: any[]) {
      state.usersList = list
    },
    changePageUsersCount(state, count: number) {
      state.usersCount = count
    },
    // 角色
    changePageRoleList(state, list: any[]) {
      state.roleList = list
    },
    changePageRoleCount(state, count: number) {
      state.roleCount = count
    },
    // 商品
    changePageGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changePageGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    // 菜单
    changePageMenuList(state, list: any[]) {
      state.menuList = list
    },
    changePageMenuCount(state, count: number) {
      state.menuCount = count
    },
    // 部门
    changePageDepartmentList(state, list: any[]) {
      state.departmentList = list
    },
    changePageDepartmentCount(state, count: number) {
      state.departmentCount = count
    },
    // 商品分类
    changePageCategoryList(state, list: any[]) {
      state.categoryList = list
    },
    changePageCategoryCount(state, count: number) {
      state.categoryCount = count
    },
    // 故事列表
    changePageStoryList(state, list: any[]) {
      state.storyList = list
    },
    changePageStoryCount(state, count: number) {
      state.storyCount = count
    },
    // 保存pageInfo
    changePageInfo(state, queryInfo: any) {
      const { pageSize, currentPage } = queryInfo
      state.pageInfo.offset = currentPage
      state.pageInfo.size = pageSize
    },
    // 保存formData
    changeFormData(state, formData: any) {
      state.formData = formData
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListDataAction({ commit }, payload: PageListData) {
      const pageName: string = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 1.对页面发送请求，获取用户列表信息
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      const { list, totalCount } = pageResult.data

      // 将pageName 首字母大写
      const chagePageName = pageName.replace(
        pageName[0],
        pageName[0].toUpperCase()
      )

      commit(`changePage${chagePageName}List`, list)
      commit(`changePage${chagePageName}Count`, totalCount)
    },
    async deletePageDataAction({ state, dispatch }, payload: any) {
      // 1.获取pageName和id
      // pageName -> /users
      // id -> /users/id
      const { pageName, id } = payload
      const url = `/${pageName}/${id}`

      // 2.调用删除数据的网络请求
      const result = await deletePageData(url)
      console.log(result)

      // 3.重新请求数据
      dispatch('getPageListDataAction', {
        pageName: pageName,
        queryInfo: { ...state.pageInfo, ...state.formData }
      })
    },
    async createPageDataAction({ state, dispatch }, playload: any) {
      // 1.创建数据的请求
      const { pageName, newData } = playload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      // 2.获取最新数据
      dispatch('getPageListDataAction', {
        pageName,
        queryInfo: state.pageInfo
      })
    },
    async editPageDataAction({ state, dispatch }, playload: any) {
      // 1.创建数据的请求
      const { pageName, editData, id } = playload
      const pageUrl = `/${pageName}/${id}`

      await editPageData(pageUrl, editData)

      // 2.获取最新数据
      dispatch('getPageListDataAction', {
        pageName,
        queryInfo: state.pageInfo
      })
    }
  }
}

export default systemModule
