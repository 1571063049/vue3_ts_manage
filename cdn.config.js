module.exports = {
  // 是否使用cnd
  useCND: true,
  // key是'包名', value是静态资源引入后全局的名称 import Vue from 'vue
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    'vue-router': 'VueRouter',
    axios: 'axios',
    echarts: 'echarts',
    'highlight.js': 'hljs',
    // 必须是ELEMENT，否则会报‘elementUI is not defined’
    'element-plus': 'ElementPlus'
  },
  css: [
    'https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.17/index.min.css',
    'https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/androidstudio.min.css'
  ],
  js: [
    'https://unpkg.com/vue@3/dist/vue.global.js',
    'https://unpkg.com/vue-router@4.1.5/dist/vue-router.global.js',
    'https://cdn.bootcdn.net/ajax/libs/vuex/4.0.2/vuex.cjs.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js',
    'https://cdn.jsdelivr.net/npm/echarts@5.2.1/dist/echarts.min.js',
    'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js',
    'https://unpkg.com/element-plus@2.2.17/dist/index.full.js',
    'https://unpkg.com/@wangeditor/editor@latest/dist/index.js'
  ]
}
