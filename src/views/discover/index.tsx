import React, { Suspense, memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Link, Outlet } from 'react-router-dom'
interface IProps {
  chidren?: ReactNode
}
const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artitst">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}
export default memo(Discover)
