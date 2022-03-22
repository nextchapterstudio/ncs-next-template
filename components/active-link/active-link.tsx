import { forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { WithChildren } from '../../types'
import { block } from '../../utils/bem'

import styles from './active-link.module.scss'

type LinkProps = WithChildren<{
  href: string
  onClick?: () => void
  className?: string
}>

//eslint-disable-next-line react/display-name
export const ActiveLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, onClick, className, children }, ref) => {
    const { asPath } = useRouter()

    const activeClass = asPath == href ? 'active' : null

    return (
      <Link href={href}>
        <a
          onClick={onClick}
          className={block(styles, 'link', [activeClass], className)}
          ref={ref}
        >
          {children}
        </a>
      </Link>
    )
  }
)
