import type { ReactChild, ReactPortal, ReactNodeArray } from 'react'

export type ReactNode =
  | ReactChild
  | ReactNodeArray
  | ReadonlyArray<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined

export type WithChildren<T = {}> = T & { children?: ReactNode }
