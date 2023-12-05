import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqualApp, useAppDispatch, useAppSelector } from './store'
import { changeMessageAction } from './store/modules/counter'
function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )
  // 事件处理逻辑
  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    // console.log('handleChangeMessage')
    dispatch(changeMessageAction('哈哈哈'))
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      <h2>{message}</h2>
      <button onClick={handleChangeMessage}>change</button>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
