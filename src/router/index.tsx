import React, { lazy } from 'react'
import { Navigate, type RouteObject } from 'react-router-dom'

// import Discover from '@/views/discover'
/* import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download' */

const Discover = lazy(() => import('@/views/discover'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const Artitst = lazy(() => import('@/views/discover/c-views/artitst'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))

const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/recommend" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artitst',
        element: <Artitst />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]
export default routes
