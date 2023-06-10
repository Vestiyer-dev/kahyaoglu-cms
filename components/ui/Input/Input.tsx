import cn from 'clsx'
import s from './Input.module.css'
import React from 'react'
import type { InputHTMLAttributes ,ChangeEvent} from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...args: any[]) => any
}

const Input: React.FC<InputProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, children, onChange, ...rest } = props
  
  const rootClassName = cn(s.root, {}, className)
  

  const handleOnChange = (e: ChangeEvent) => {
    if (onChange) {
      onChange((e.target as HTMLInputElement).value)
    }
    return null
  }

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  )
}

export default Input
