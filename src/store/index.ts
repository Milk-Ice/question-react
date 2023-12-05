import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux'

import counterReducer from './modules/counter'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
// 定义了一个类型别名 GetStateFnType，拿到getState的函数类型
type GetStateFnType = typeof store.getState
type DispatchApp = typeof store.dispatch
// 定义了一个导出的类型别名 IRootState，拿到 GetStateFnType 函数返回值的类型
export type IRootState = ReturnType<GetStateFnType>

// 创建一个自定义的 React hook，使其在组件中可以更方便地使用 Redux store 的 useSelector 函数
// TypedUseSelectorHook<IRootState>  方便你做类型推导
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchApp = useDispatch
export const shallowEqualApp = shallowEqual
export default store
