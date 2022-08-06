//  方式二: 根据process.env.NODE_ENV区分切换(推荐).
// 开发环境: development
// 生成环境: production
// 测试环境: test

let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api' //不能反了顺序，比如 'api/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else {
  BASE_URL = 'http://123.207.32.32:8000/'
}

// 方式三:编写不同的环境变量配置文件；

export { BASE_URL, TIME_OUT }
