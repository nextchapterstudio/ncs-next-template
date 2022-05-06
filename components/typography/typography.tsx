import * as React from 'react'
import { block } from '../../utils/bem'
import type { WithChildren } from '../../types/with-children'

import styles from './typography.module.scss'

type TypographyProps = WithChildren<{
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  className?: string
  variant?:
    | 'heading-1'
    | 'heading-1-bold'
    | 'subhead-1'
    | 'subhead-2'
    | 'subhead-3'
    | 'body-1'
    | 'body-1-bold'
    | 'body-2'
    | 'body-2-bold'
    | 'infographic'
    | 'infographic-body'
  color?: 'acid' | 'navy'
  id?: string
  maxWidth?: boolean
  leftMargin?: boolean
  noTopMargin?: boolean
}>

export const Typography = ({
  component,
  className,
  children,
  color,
  variant = 'body-1',
  id,
  maxWidth,
  leftMargin,
  noTopMargin,
  ...props
}: TypographyProps) => {
  const Component = component ? component : 'p'

  return (
    <Component
      className={block(
        styles,
        'typography',
        [
          variant,
          color,
          leftMargin && 'left-margin',
          maxWidth && 'max-width',
          noTopMargin && 'no-top-margin',
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
