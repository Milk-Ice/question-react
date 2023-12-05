import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const Focus: FC<IProps> = () => {
  return <div>Focus</div>
}
export default memo(Focus)
