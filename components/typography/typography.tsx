import * as React from 'react'
import { block } from '../../utils/bem'
import type { WithChildren } from '../../types/with-children'

import styles from './typography.module.scss'

type TypographyProps = WithChildren<{
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  className?: string
  variant?:
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'body-text'
  color?: 'acid' | 'navy'
  id?: string
  maxWidth?: 
   | 'lg'
   | 'md'
   | 'sm'
  leftMargin?: boolean
  noTopMargin?: boolean
  alignment?:
  | 'center'
  | 'right'
  | 'left'
}>

export const Typography = ({
  component,
  className,
  children,
  color,
  variant = 'body-text',
  id,
  maxWidth,
  leftMargin,
  noTopMargin,
  alignment,
  ...props
}: TypographyProps) => {
  const Component = component ? component : 'p'

  return (
    <Component
      // className={styles['heading-1']}
      className={block(
        styles,
        'typography',
        [
          variant,
          // color,
          // leftMargin && 'left-margin',
          maxWidth,
          alignment,
          // noTopMargin && 'no-top-margin',
        ],
        className
      )}
      id={id}
      {...props}
    >
      {children}
    </Component>
  )
}
