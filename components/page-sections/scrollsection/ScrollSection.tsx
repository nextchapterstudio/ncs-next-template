import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cx from 'classnames'
import styles from './ScrollSection.module.scss'

function ScrollSection() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
          markers: true,
        },
      }
    )

    gsap.from('.lorem2', {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: '.scroll-section2',
        start: 'top -50%',
        markers: true,
      },
    })

    gsap.from('.lorem3', {
      y: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: '.scroll-section3',
        start: 'top -150%',
        markers: true,
      },
    })

    return () => {
      //    pin.kill()
    }
  }, [])

  return (
    <section
      className={cx('scroll-section-outer', styles.scroll_section_outer)}
    >
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className={cx('scroll-section-inner', styles.scroll_section_inner)}
        >
          <div className={cx('scroll-section', styles.scroll_section_one)}>
            <h1 className={cx('lorem', styles.section_one_text)}> Section 1</h1>
          </div>
          <div className={cx('scroll-section2', styles.scroll_section_two)}>
            <h1 className={cx('lorem2', styles.section_two_text)}>
              {' '}
              Section 2
            </h1>
          </div>
          <div className={cx('scroll-section3', styles.scroll_section_three)}>
            <h1 className={cx('lorem3', styles.section_three_text)}>
              {' '}
              Section 3
            </h1>
          </div>
          <div className={cx('scroll-section', styles.scroll_section_four)}>
            <h1 className={cx('lorem', styles.section_four_text)}>
              {' '}
              Section 4{' '}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollSection
