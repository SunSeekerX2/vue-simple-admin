# vue-simple-admin

> 这是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont，这些搭建后台必要的东西。
>
> 基于最新的依赖进行构建。
>
> [线上地址](http://panjiachen.github.io/vue-admin-template)

## 个人改造

> 本项目基于**[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)**
>
> 个人基于`4.2.1`版本进行改造，以后进行独立维护，改造目标为更加适合快速开发，去除中小团队接触不到，或者用的比较少的功能，例如`Mock`，`Test`模块，同时对依赖进行升级，跟随最新的依赖。



### Api管理

在全局挂载了api对象，所有项目的网络请求分模块统一管理



### 网络请求错误处理

统一处理网络请求产生的错误

## Build Setup

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建生产环境
npm run build:prod

# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 原作者信息

> 就是大名鼎鼎的`vue-element-admin`的作者
>
> 地址：[PanJiaChen](https://github.com/PanJiaChen)

