import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cx from 'classnames'
import styles from './Section2.module.scss'

function Section2() {
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
        // markers: true,
      },
    })

    gsap.from('.lorem3', {
      y: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: '.scroll-section3',
        start: 'top -100%',
        // markers: true,
      },
    })

    // gsap.from('.lorem4',{
    //   y:500,
    //   scrollTrigger: {
    //     trigger: '.scroll-section4',
    //     start: 'top -150%',
    //     markers: true,
    //     pin:true,
    //     scrub:0.7
    //   },
    // })

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
            <h1 className={cx('lorem', styles.section_one_text)}> Section 4</h1>
          </div>
          <div className={cx('scroll-section2', styles.scroll_section_two)}>
            <h1 className={cx('lorem2', styles.section_two_text)}>
              {' '}
              Section 5
            </h1>
          </div>
          <div className={cx('scroll-section3', styles.scroll_section_three)}>
            <h1 className={cx('lorem3', styles.section_three_text)}>
              {' '}
              Section 6
            </h1>
          </div>
          {/* <div className={cx('scroll-section4', styles.scroll_section_four)}>
            <h1 className={cx('lorem4', styles.section_four_text)}>
              {' '}
              "Each cup of tea represents an imaginary voyage"
            </h1>
          </div> */}
          {/* <div className={cx('scroll-section5', styles.scroll_section_five)}>
            <h1 className={cx('lorem5', styles.section_five_text)}>
              {' '}
              Section 5
            </h1>
          </div>
          <div className={cx('scroll-section6', styles.scroll_section_six)}>
            <h1 className={cx('lorem6', styles.section_six_text)}>
              {' '}
              Section 6
            </h1>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Section2
