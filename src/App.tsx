import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app=ffooter'
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
      <AppFooter />
    </div>
  )
}

export default App
