import cn from 'clsx'
import React, {
  forwardRef,

  useRef,
} from 'react'

import type { ButtonHTMLAttributes, JSXElementConstructor } from 'react'
import { mergeRefs } from 'react-merge-refs'
import s from './Button.module.css'
import { LoadingDots } from '@components/ui'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  variant?: 'flat' | 'slim' | 'ghost' | 'naked'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component?: string | JSXElementConstructor<any>
  width?: string | number
  loading?: boolean
  disabled?: boolean
  success?: boolean
}

// eslint-disable-next-line react/display-name
const Button: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = 'flat',
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    success = false,
    Component = 'button',
    ...rest
  } = props
  const ref = useRef<typeof Component>(null)

  const rootClassName = cn(
    s.root,
    {
      [s.ghost as string]: variant === 'ghost',
      [s.slim as string]: variant === 'slim',
      [s.naked as string]: variant === 'naked',
      [s.loading as string]: loading,
      [s.disabled as string]: disabled,
      [s.success as string]: success,
    },
    className
  )

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled || success || loading}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="m-0 flex pl-2 cursor-pointer">
          <LoadingDots />
        </i>
      )}
    </Component>
  )
})

export default Button
