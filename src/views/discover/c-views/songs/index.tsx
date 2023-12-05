import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  chidren?: ReactNode
}
const Song: FC<IProps> = () => {
  return <div>Song</div>
}
export default memo(Song)
