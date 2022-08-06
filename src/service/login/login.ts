import gfRequest from '../index'

import { IAccount, ILoginResult, IDataType } from './types'

enum LoginApi {
  Accountlogin = '/login',
  PhoneLogin = '/test',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return gfRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.Accountlogin,
    data: account
  })
}

export function phoneLoginRequest() {
  return gfRequest.get<IDataType<ILoginResult>>({
    url: LoginApi.PhoneLogin
  })
}

// 后面的每一个请求都需要携带token，headers.Authorization =  `Bearer ${token}` ，所以统一放到gfRequest请求中
export function requestUserInfoById(id: number) {
  return gfRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  })
}

export function requestUserMenusByRoleId(id: number) {
  return gfRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
