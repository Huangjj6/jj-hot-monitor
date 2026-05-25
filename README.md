# 🐰 Vue3 RabbIt - 电商前端项目

基于 **Vue 3** + **Vite** + **Element Plus** 构建的电商前台 SPA 应用。

## 🚀 技术栈

| 分类 | 技术 |
|------|------|
| 框架 | [Vue 3](https://vuejs.org/)（Composition API + `<script setup>`） |
| 构建工具 | [Vite 6](https://vite.dev/) |
| 路由 | [Vue Router 4](https://router.vuejs.org/) |
| 状态管理 | [Pinia](https://pinia.vuejs.org/) + 持久化插件 |
| UI 组件库 | [Element Plus](https://element-plus.org/) |
| HTTP 请求 | [Axios](https://axios-http.com/) |
| CSS 预处理 | [Sass/SCSS](https://sass-lang.com/) |
| 工具库 | [@vueuse/core](https://vueuse.org/) |
| 代码规范 | [ESLint](https://eslint.org/) |

## ✨ 功能模块

- **首页** — 轮播 Banner、分类推荐、热门商品、新品上架
- **分类浏览** — 一级分类 & 二级分类商品列表
- **商品详情** — 商品信息展示、SKU 选择、加入购物车
- **购物车** — 增删改查、登录后合并本地购物车
- **结算下单** — 收货地址、订单确认
- **支付** — 支付流程 & 支付回调处理
- **用户登录** — 账号密码登录、自动合并购物车

## 📁 项目结构

```
src/
├── apis/            # API 接口模块
├── assets/          # 静态资源（图片、全局样式）
├── components/      # 公共组件（ImageView、XtxSku 等）
├── composables/     # 组合式函数
├── directives/      # 自定义指令
├── router/          # 路由配置
├── stores/          # Pinia 状态管理（cart、category、user）
├── styles/          # 全局样式变量 & Element Plus 主题覆盖
├── utils/           # 工具函数（HTTP 封装等）
└── views/           # 页面组件
    ├── Home/        # 首页
    ├── Category/    # 一级分类
    ├── SubCategory/ # 二级分类
    ├── Detail/      # 商品详情
    ├── CartList/    # 购物车
    ├── Checkout/    # 结算
    ├── Pay/         # 支付
    ├── Login/       # 登录
    └── Layout/      # 公共布局（头部导航、页脚等）
```

## 🛠️ 快速开始

### 环境要求

- Node.js >= 18
- npm >= 8

### 安装依赖

```sh
npm install
```

### 启动开发服务器

```sh
npm run dev
```

### 构建生产版本

```sh
npm run build
```

### 预览生产构建

```sh
npm run preview
```

### 代码检查

```sh
npm run lint
```

## 📄 相关文档

- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 配置参考](https://vite.dev/config/)
- [Element Plus 组件库](https://element-plus.org/)
- [Pinia 状态管理](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)

## 📌 推荐 IDE 配置

[VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（请禁用 Vetur）
