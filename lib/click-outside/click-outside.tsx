/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type {MouseEvent,FC, ReactElement, Ref,ReactNode } from "react"
import React, {
  useRef,
  useEffect,
 
  forwardRef,
 
} from 'react'
import { mergeRefs } from 'react-merge-refs'
import hasParent from './has-parent'



interface ClickOutsideProps {
  active: boolean
  onClick: (e?: MouseEvent) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<any>
  children?: ReactNode
}

/**
 * Use forward ref to allow this component to be used with other components like
 * focus-trap-react, that rely on the same type of ref forwarding to direct children
 */
const ClickOutside: FC<ClickOutsideProps> = forwardRef(
  ({ active = true, onClick, children }, forwardedRef) => {
    const innerRef = useRef()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const child = children ? (React.Children.only(children) as any) : undefined

    // eslint-disable-next-line
    if (!child || child.type === React.Fragment) {
      /**
       * React Fragments can't be used, as it would not be possible to pass the ref
       * created here to them.
       */
      throw new Error('A valid non Fragment React Children should be provided')
    }

    if (typeof onClick != 'function') {
      throw new Error('onClick must be a valid function')
    }

    useEffect(() => {
      if (active) {
        document.addEventListener('mousedown', handleClick)
        document.addEventListener('touchstart', handleClick)
      }
      return () => {
        if (active) {
          document.removeEventListener('mousedown', handleClick)
          document.removeEventListener('touchstart', handleClick)
        }
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (event: any) => {
      /**
       * Check if the clicked element is contained by the top level tag provided to the
       * ClickOutside component, if not, Outside clicked! Fire onClick cb
       */

      if (!innerRef?.current) return



      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (!hasParent(event.target, innerRef?.current)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        onClick(event)
      }
    }

    /**
     * Preserve the child ref prop if exists and merge it with the one used here and the
     * proxied by the forwardRef method
     */
    const composedRefCallback = (element: ReactElement) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (typeof child.ref === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        child.ref(element)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      } else if (child.ref) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        child.ref.current = element
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return React.cloneElement(child, {
      ref: mergeRefs([composedRefCallback, innerRef, forwardedRef]),
    })
  }
)

ClickOutside.displayName = 'ClickOutside'
export default ClickOutside
