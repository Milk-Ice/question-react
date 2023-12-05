import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const Artitst: FC<IProps> = () => {
  return <div>artitst</div>
}
export default memo(Artitst)
