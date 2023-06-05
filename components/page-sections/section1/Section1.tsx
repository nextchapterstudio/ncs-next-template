import React, { useEffect, useLayoutEffect } from 'react'
import styles from './Section1.module.scss'
import cx from 'classnames'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Section1 = () => {
  const app = useRef<HTMLDivElement>(null)
  const circle = useRef<HTMLDivElement>(null)
  const shape = useRef<HTMLDivElement>(null)

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to('.section', { rotation: 360 })

  //     gsap.to(circle.current, { rotation: -360 })

  //     gsap.to('.shape', {
  //       x: 150,
  //       scrollTrigger: {
  //         trigger: '.section2',
  //         start: 'bottom bottom',
  //         end: ' top ',
  //         markers: true,
  //       },
  //     })
  //   })

  //   return () => ctx.revert()
  // })

  return (
    <>
      <div ref={app} className={cx('containerr', styles.containerr)}>
        <div className={cx('section', styles.page1)}>
          <h1 className={styles.textone}>
            "Each cup of tea represents an imaginary voyage"
          </h1>
        </div>
        {/* <div className={cx('section2', styles.page2)}>
          <div ref={shape} className={cx('shape', styles.shape)}>
            2
          </div>
        </div>
        <div ref={circle} className={cx('section', styles.page3)}>
          3
        </div> */}
      </div>
    </>
  )
}
