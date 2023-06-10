import cn from 'clsx'
import React from 'react'
import type { FC } from 'react'

interface ContainerProps {
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean = false, // Full Width Screen
}) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-7xl px-6 w-full': !clean,
  })

// eslint-disable-next-line prefer-const, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
