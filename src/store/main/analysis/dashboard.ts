import { Module } from 'vuex'

import { IRootState } from '../../types'
import { IDashboardState } from './types'

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
  getToptenGoodsSale,
  getTotalGoodsCount
} from '@/service/main/analysis/dashboard'

const ModuleDashboard: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      toptemGoodsSale: [],
      totalGoodsCount: []
    }
  },
  mutations: {
    changeCategoryCount(state, list: any) {
      state.categoryGoodsCount = list
    },
    changeCategorySale(state, list: any) {
      state.categoryGoodsSale = list
    },
    changeCategoryFavor(state, list: any) {
      state.categoryGoodsFavor = list
    },
    changeAddressSale(state, list: any) {
      state.addressGoodsSale = list
    },
    changeToptenSale(state, list: any) {
      state.toptemGoodsSale = list
    },
    changeTotalCount(state, list: any) {
      state.totalGoodsCount = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit('changeCategoryCount', categoryCountResult.data)

      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeCategorySale', categorySaleResult.data)

      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryFavor', categoryFavorResult.data)

      const addressSaleResult = await getAddressGoodsSale()
      commit('changeAddressSale', addressSaleResult.data)

      const toptenSaleResult = await getToptenGoodsSale()
      commit('changeToptenSale', toptenSaleResult.data)

      const totalCountResult = await getTotalGoodsCount()
      commit('changeTotalCount', totalCountResult.data)
    }
  }
}

export default ModuleDashboard
