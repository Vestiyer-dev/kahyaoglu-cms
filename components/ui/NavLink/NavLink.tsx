
import { LoadingDots } from '@components/ui'
import Link from 'next/link'

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   href?: string
//   className?: string
//   variant?: 'flat' | 'slim' | 'ghost' | 'naked'
//   active?: boolean
//   type?: 'submit' | 'reset' | 'button'
//   Component?: string | JSXElementConstructor<any>
//   width?: string | number
//   loading?: boolean
//   disabled?: boolean

// }

// // eslint-disable-next-line react/display-name
// const NavLink: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
//   const {
//     className,
//     variant = 'flat',
//     children,
//     active,
//     width,
//     loading = false,
//     disabled = false,
//     style = {},
//     Component = 'button',
//     href,
//     ...rest
//   } = props

//   //TODO: fix this
//   const rootClassName = cn(
//     s.root,
//     {
//       [s.ghost as string]: variant === 'ghost',
//       [s.slim as string]: variant === 'slim',
//       [s.naked as string]: variant === 'naked',
//       [s.loading as string]: loading,
//       [s.disabled as string]: disabled,
//     },
//     className
//   )

//   return (
//     <Link
//       href={href || '/'}
//       className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 "
//     >
//       {children}
//       {loading && (
//         <i className="m-0 flex pl-2">
//           <LoadingDots />
//         </i>
//       )}
//     </Link>
//   )
// })

// export default NavLink

//   loading?: boolean

export default function NavLink({ href, children, loading, classNames }: { href: string, children: React.ReactNode, loading?: boolean, classNames?: string }) {
  return (
    <Link
      href={href || '/'}
      className={`${classNames ? classNames : ""} inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900   `}
    >
      {children}
      {loading && (
        <i className="m-0 flex pl-2">
          <LoadingDots />
        </i>
      )}
    </Link>
  )
}
