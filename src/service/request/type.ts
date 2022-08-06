import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IGFRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface IGFRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: IGFRequestInterceptors<T>
  showLoading?: boolean
}
