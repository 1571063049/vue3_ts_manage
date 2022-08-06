export interface IUserList {
  name: string
  realname: string
  cellphone: number
  departmentId: number
  id: number
  enable: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface IPropList {
  prop: string
  label: string
  minWidth?: string
  slotName?: string
}
