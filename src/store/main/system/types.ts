import { IUserList } from '@/base-ui/table'
export interface ISystemState {
  usersList: IUserList[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
  menuList: any[]
  menuCount: number
  departmentList: any[]
  departmentCount: number
  categoryList: any[]
  categoryCount: number
  storyList: any[]
  storyCount: number
  pageInfo: any
  formData: any
}
