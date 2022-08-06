module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator'
    // [
    //   ('import',
    //   {
    //     libraryName: 'element-plus',
    //     customStyleName: (name) => {
    //       return `element-plus/theme-chalk/${name}.css`
    //     }
    //   })
    // ]
  ]
}
