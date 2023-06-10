import type { FC } from 'react'
import cn from 'clsx'

interface ErrorMessageProps {
  error: {
    message: string
    code?: string
    errors?: {
      message: string
    }[]
  }
  className?: string
}

const ErrorMessages: FC<ErrorMessageProps> = ({ error, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col border border-solid border-red py-2.5 px-4 text-red',
        className
      )}
    >
      <span>{error.message}</span>
      {error.errors && error.errors?.length > 0 && (
        <ul className="list-inside list-disc">
          {error.errors.map(({ message }, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ErrorMessages
