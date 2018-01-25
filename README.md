# demo1
分支

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

v-cloak解决刷新或加载出现闪烁(变量),在使用vue绑定数据的时候，渲染页面时会出现变量闪烁
v-cloak的这个样式放在@import 引入的css文件中不起作用，可以放在link引入的css文件里或者内联样式中
