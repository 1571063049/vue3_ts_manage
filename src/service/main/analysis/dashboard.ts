import gfRequest from '@/service'

import { IDataType } from '../../login/types'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale',
  toptenGoodsSale = '/goods/sale/top10',
  totalGoodsCount = '/goods/address/sale'
}

// 分类商品个数
export function getCategoryGoodsCount() {
  return gfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}

// 分类商品销量
export function getCategoryGoodsSale() {
  return gfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}

// 分类商品收藏
export function getCategoryGoodsFavor() {
  return gfRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

// 不同城市销量
export function getAddressGoodsSale() {
  return gfRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}

// 销量前十的商品数量
export function getToptenGoodsSale() {
  return gfRequest.get<IDataType>({
    url: DashboardAPI.toptenGoodsSale
  })
}

// 商品统计数量
export function getTotalGoodsCount() {
  return gfRequest.get<IDataType>({
    url: DashboardAPI.totalGoodsCount
  })
}
