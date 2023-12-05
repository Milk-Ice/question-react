import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const DownLoad: FC<IProps> = () => {
  return <div>DownLoad</div>
}
export default memo(DownLoad)
