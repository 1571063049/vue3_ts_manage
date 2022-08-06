const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // 1.配置方式一: CLI提供的属性
  // outputDir: './build',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/', //部署到服务器记得注释掉

  // 跨域代理
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 配置方式二 和webpack属性完全一致, 最后会进行合并
  //    可以是一个对象，直接会被合并；
  //    可以是一个函数，会接收一个config，可以通过config来修改配置；
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        views: path.resolve(__dirname, 'src/views'),
        assets: path.resolve(__dirname, 'src/assets')
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [{ loader: 'less-loader' }]
        }
      ]
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  // '@': path.resolve(__dirname, 'src'),
  //     components: '@/components',
  //     views: '@/views'
  //   }
  // }

  // 配置方式三 通过chainWebpack修改webpack的配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  //     .set('components', '@/components')
  // }
}
