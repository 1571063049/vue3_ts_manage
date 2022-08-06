import gfRequest from '@/service'

import { IDataType } from '@/service/login/types'

// url: /users/list
export function getPageListData(url: string, queryInfo: any) {
  return gfRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return gfRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return gfRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return gfRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
