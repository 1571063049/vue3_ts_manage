// import { ElLoading } from 'element-plus'
import GFRequest from './index'
export default function (axios: GFRequest): void {
  // 使用拦截器
  // 1.从config中取出的拦截器是对应的实例的拦截器
  axios.instance.interceptors.request.use(
    axios.interceptors?.requestInterceptor,
    axios.interceptors?.requestInterceptorCatch
  )

  axios.instance.interceptors.response.use(
    axios.interceptors?.responseInterceptor,
    axios.interceptors?.responseInterceptorCatch
  )

  // 2.添加所有的实例都有的拦截器
  axios.instance.interceptors.request.use(
    (config) => {
      // console.log('所有的实例都有的拦截器: 请求成功拦截')

      // 开启loading
      // if (axios.showLoading) {
      //   axios.loading = ElLoading.service({})
      // }
      return config
    },
    (err) => {
      // console.log('所有的实例都有的拦截器: 请求失败拦截')
      return err
    }
  )
  axios.instance.interceptors.response.use(
    (res) => {
      // console.log('所有的实例都有的拦截器: 响应成功拦截')

      // 将loading移除
      // axios.loading?.close()

      const data = res.data

      if (data && data.returnCode === '-1001') {
        console.log('请求失败~, 错误信息')
      } else {
        return data
      }
    },
    (err) => {
      // console.log('所有的实例都有的拦截器: 响应失败拦截')
      // 将loading移除
      // axios.loading?.close()

      // 例子: 判断不同的HttpErrorCode显示不同的错误信息
      // 一般用 switch 来判断
      if (err.response.status === 404) {
        console.log('404的错误~')
      }

      return err
    }
  )
}
