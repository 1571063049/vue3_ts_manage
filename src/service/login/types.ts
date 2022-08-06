export interface IAccount {
  name: string
  age: number
}

// export interface IPhone {}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
