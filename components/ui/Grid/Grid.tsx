import cn from 'clsx'
import type { FC, ReactNode } from 'react'
import s from './Grid.module.css'

interface GridProps {
  className?: string
  children?: ReactNode
  layout?: 'A' | 'B' | 'C' | 'D' | 'normal'
  variant?: 'default' | 'filled'
}



const Grid: FC<GridProps> = ({
  className,
  layout = 'A',
  children,
  variant = 'default',
}) => {


  const rootClassName = cn(
    s.root,
    {
      [s.layoutA as string]: layout === 'A',
      [s.layoutB as string]: layout === 'B',
      [s.layoutC as string]: layout === 'C',
      [s.layoutD as string]: layout === 'D',
      [s.layoutNormal as string]: layout === 'normal',
      [s.default as string]: variant === 'default',
      [s.filled as string]: variant === 'filled',
    },
    className
  )
  return <div className={rootClassName}>{children}</div>
}

export default Grid
