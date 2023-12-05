import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const Mine: FC<IProps> = () => {
  return <div>Mine</div>
}
export default memo(Mine)
