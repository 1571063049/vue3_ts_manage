# 11_vue3_ts_cms
# 基于Vue3 + Typescript 的后台管理项目
#### 使用技术：
-  Vue3、Axios、Typescript、Element-Plus、Echarts、Highlight.js、Wangeditor...
#### 项目构建
- 采用代码编写规范和git提交规范对项目进行初始化配置,并采用统一的文件命名和代码结构格式来规范项目的目录结构进行搭建

- 使用Vue3API技术栈结合Typescript进行类型检测来编写整体项目

- 对axios请求采用了class结合Typescript进行参数和拦截器类型的二次封装

- 采用动态路由完成路由的动态注册,对路由信息文件通过文件路径映射成以个包含导入路由文 件信息的数组,遍历数组实现路由动态注册

- 使用element-plus组件库进行搭建,采用动态导入,同时结合组件库再次封装了整体页面都可复用的高级组件来快速搭建页面布局

- 大量使用组件封装和hooks进行代码的抽取来优化项目

- 使用Echarts5对商品的数据进行可视化图标的展示,并将echarts进行共用组件化封装,使其更加具有可复用性和可维护性

- 最后对打包后的项目执行了自动化部署过程，只是用来临时的服务器，后续有了自己的服务器会及时更新地址

#### 登录界面
账号: coderwhy 密码 123456 (管理员账号)
账号: gaofeng 密码 123456 (可以自行注册账号)
采用Element-Plus / El-Form 进行输入框的规则验证,同时选择得保存当前账号到本地
![image](https://user-images.githubusercontent.com/84273837/187813133-41b5767d-badb-4173-a16a-53537440f804.png)

#### 主界面
- 采用左 + 中(上+中+下) 板式进行布局
- 也进行了页面的响应式布局，进行缩放时自动改变布局

##### 核心技术
- 技术栈
![image](https://user-images.githubusercontent.com/84273837/187812571-b90dac66-68e7-4a37-9ebf-8b1965033258.png)

- 项目结构（界面太长了，就不一一展示了，通过 `highlight.js` 库进行实现）
![image](https://user-images.githubusercontent.com/84273837/187814817-7b06d6c3-dc34-47aa-906b-d0a65823dad5.png)

- 文件命名规范-组件编写规范-Git提交规范
![image](https://user-images.githubusercontent.com/84273837/187814747-5c30af1f-7652-47ad-ad39-d67025da39be.png)

##### Echarts可视化界面（`echarts 5.x`）

采用echarts 5.x 来展示数据，让数据变得更加可读
![image](https://user-images.githubusercontent.com/84273837/187813593-d0c9a6f6-014e-4a20-8571-3395f827fd38.png)

##### 用户管理界面
用户信息的管理界面，对用户信息进行增删改查功能
![image](https://user-images.githubusercontent.com/84273837/187813693-05ce839f-09db-4327-9e10-71ee74c08da7.png)

添加用户
![image](https://user-images.githubusercontent.com/84273837/187815217-aeb1fd16-69b7-4841-858d-cf34fc9458b9.png)


##### 编辑框界面（`wangeditor`）
![image](https://user-images.githubusercontent.com/84273837/187813462-bce9412a-439a-4f9a-963c-a085efb3327c.png)


开发工具 : `Visual Studio Code`  编程语言 : `TypeScript 4.x + JavaScript`  构建工具 : `Webpack5.x`  前端框架 : `Vue 3.x`

路由工具 : `Vue Router 4.x`  状态管理 : `Vuex 4.x ` UI 框架 : `Element Plus`  可视化 : `Echart5.x`  富文本 : `WangEditor`

工具库 : `@vueuse/core + dayjs + countup.js`  数据模拟 : `mockjs  CSS` 预编译 : `Sass / Less`  HTTP 工具 : `Axios`

Git Hook 工具 : `husky`  代码规范 : `EditorConfig + Prettier + ESLint`  提交规范 : `Commitizen + Commitlint`

自动部署 : `Centos + Jenkins + Nginx`

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
