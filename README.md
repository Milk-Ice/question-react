# 项目开发过程



## 一. 项目的创建



### 1.1. 项目简单的介绍



### 1.2. 创建项目--template typescript



### 1.3. 对目录结构分析



## 二. 代码的规范



### 2.1. editorconfig



### 2.2. prettier



- VSCode Prettier安装插件

- npm install prettier -D 

- - prettier --write .

- .prettierrc

- .prettierignore



### 2.3. eslint



- VSCode ESLint安装插件

- npm install eslint -D

- eslint --init 

- - 各种选择

- 需要和prettier结合 

- - npm install eslint-config-prettier eslint-plugin-prettier -D

- - 配置: 'plugin:prettier/recommended'



## 三. 项目的搭建



### 3.1. 目录结构的划分



### 3.2. CSS的重置



### 3.3. 路由的配置



- 一级路由的配置

- React组件的TypeScript类型写法 

- - 函数式组件的类型.

- - 类组件的类型.(后续)

- 路由的懒加载(lazy) 

- - suspense fallback

- 二级路由的配置 

- - Outlet

- - suspense



### 3.4. 状态管理redux



- 配置store 

- - configureStore

- - Provider

- 创建slice 

- - name

- - initialState

- - reducers

- useSelector的类型问题 => state 

- - type IRootState ReturnType

- - const useAppSelector: TypedUseSelectorHook = useSelector

- TypedUseSelectorHook内部的实现细节

- useDispatch抽取

- shallowEqual抽取
