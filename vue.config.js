const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// 代码压缩
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = (url) => path.resolve(__dirname, url)

// const isPRD = process.env.NODE_ENV === 'production'
// cdn相关配置
// const cdnConfig = require('./cdn.config.js')

module.exports = {
  // 1.配置方式一: CLI提供的属性
  productionSourceMap: false,
  // outputDir: './build',
  // publicPath: isPRD ? './' : '/', //部署到服务器记得注释掉
  // assetsDir: './assets',
  // chainWebpack: (config) => {
  //   // 配置，将当前页定义的cdn值传到主页面（index.html）
  //   config.plugin('html').tap((args) => {
  //     // 这里我是除本地环境，其余均使用CDN，可自己选择是否配置
  //     args[0].cdn = isPRD ? cdnConfig : {}
  //     return args
  //   })
  // },
  // 跨域代理
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://123.207.32.32:5000/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 配置方式二 和webpack属性完全一致, 最后会进行合并
  // 可以是一个对象，直接会被合并；
  // 可以是一个函数，会接收一个config，可以通过config来修改配置；
  configureWebpack: {
    // 别名
    resolve: {
      alias: {
        '@': resolve('src'),
        components: resolve('src/components'),
        views: resolve('src/views'),
        assets: resolve('src/assets')
      }
    },
    // 规则
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{ loader: 'less-loader' }]
        }
      ]
    },
    // 插件
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     //生产环境自动删除console
      //     compress: {
      //       drop_debugger: true,
      //       drop_console: true,
      //       pure_funcs: ['console.log']
      //     }
      //   },
      //   // 不打包映射文件
      //   // sourceMap: false,
      //   // 使用多进程并行运行来提高构建速度
      //   parallel: true
      // })
    ]
    // 代码抽离
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         chunks: 'all',
    //         test: /node_modules/,
    //         name: 'vendor',
    //         minChunks: 1,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //         priority: 100
    //       },
    //       common: {
    //         chunks: 'all',
    //         test: /[\\/]src[\\/]js[\\/]/,
    //         name: 'common',
    //         minChunks: 2,
    //         maxInitialRequests: 5,
    //         minSize: 0,
    //         priority: 60
    //       },
    //       styles: {
    //         name: 'styles',
    //         test: /\.(le|c)ss$/,
    //         chunks: 'all',
    //         enforce: true
    //       },
    //       runtimeChunk: {
    //         name: 'manifest'
    //       }
    //     }
    //   }
    // },
    // 生产环境注入CDN
    // externals: isPRD && cdnConfig.useCND ? cdnConfig.externals : {}
  }
}
