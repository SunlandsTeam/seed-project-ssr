# ssr-seed

> A Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
## 使用细则

#### 目录结构
pages：各页面组件，用于生成对应路由，支持嵌套，支持动态路由  
components：各组件，用于你自己管理公共组件或非公共组件  
layouts：宿主布局页面模板组件，用于你可以把不同的页面指定使用不同的布局  
assets：用于webpack编译的各类资源，通常是一些小的资源，如代替雪碧图之类的图片等东西  
middleware：中间件，首屏渲染和路由跳转前均执行对应中间件（登录态校验等），可以返回promise或直接next（很实用！）  
plugins：插件，SPA中用的各类第三方组件和一些node模块都可以在这引入，甚至可以引入自己编写的第三方库  
store：内置了vuex，可以直接返回数据模块或返回一个自建vuex根对象，具体要翻文档  
scss：自定义全局样式  

#### element-ui 使用
采用按需加载，使用 element-ui 的组件之前，先确认是否在 ~/plugins/element-ui.js 中引用该组件

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
