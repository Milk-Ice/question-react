import hyRequest from '@/service'
import React, { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
export interface IBannerData {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

const Recommand: FC<IProps> = () => {
  // 使用了 React 中的 useState 钩子，初始化了一个状态变量 banners，其类型为 IBannerData[]，
  // 并将其初始值设为一个空数组 []。这意味着 banners 是一个包含 IBannerData 类型元素的数组，而初始时是空数组
  // setBanners 是由 useState 返回的用于更新状态的函数
  // 在这个特定的例子中，setBanners 用于更新名为 banners 的状态变量。它接受一个新的值作为参数，并在调用时触发组件的重新渲染。
  const [banners, setBanners] = useState<IBannerData[]>([])
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])
  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}
export default memo(Recommand)
