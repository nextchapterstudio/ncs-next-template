import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import cx from 'classnames'
import styles from './ScrollSection.module.scss'
import { Typography } from 'components/typography'

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
          end: '+=3000',
          scrub: 0.6,
          pin: true,
        },
      }
    )

    // const tl = gsap.timeline({
    //   trigger:'lorem2',
    //   start: "40% top",
    //   end: "+=1000",
    //   scrub:true,
    //   markers: true,
    //   pin:true,
    // })
    // tl
    //   .fromTo('.lorem2', { y:150, opacity: 0, duration: 1 },{y:0, opacity: 1, duration:1})
    //   .to('.lorem2', { y:-150, opacity: 0, duration: 0.5 }, 1)
    //   .fromTo('.lorem3', { y:150, opacity: 0, duration: 1 },{y:0, opacity: 1, duration:1})
    //   .to('.lorem3', { y:-150, opacity: 0, duration: 0.5 }, 1)

    gsap.fromTo(
      '.lorem2',
      {
        y: 150,
        opacity: 0,
        duration: 1,
        ScrollTrigger: {
          trigger: 'scroll-section-two',
          start: 'top top',
          markers: true,
          pin: true,
        },
      },
      { y: 0, opacity: 1, duration: 1 }
    )

    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill()
    }
  }, [])

  return (
    <div>
      <section
        className={cx('scroll-section-outer', styles.scroll_section_outer)}
      >
        {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

        {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className={cx('scroll-section-inner', styles.scroll_section_inner)}
          >
            <div className={cx('scroll-section', styles.scroll_section_one)}>
              <h3>Section 1</h3>
            </div>
            <div
              className={cx('scroll-section-two', styles.scroll_section_two)}
            >
              <Typography
                className={cx('lorem2', styles.lorem2)}
                variant="heading-1"
                alignment="center"
                component="h1"
                maxWidth="md"
              >
                discover the world in every cup
              </Typography>
            </div>
            <div className={cx('scroll-section', styles.scroll_section_three)}>
              <Typography
                className={cx('lorem3', styles.lorem3)}
                variant="heading-3"
                alignment="center"
                component="h3"
                maxWidth="md"
              >
                Welcome to Q Tea, the ultimate destination for tea enthusiasts
                seeking to embark on a journey of taste and culture. Nestled in
                the heart of Seoul, we offer a unique and luxurious experience,
                where every sip of our carefully crafted teas represents an
                imaginary voyage.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.vertical_scroll}>
        <Typography
                variant="heading-1"
                alignment="center"
                component="h1"
                maxWidth="md"
              >
                "Each cup of tea represents an imaginary"
              </Typography>
        </div>
      </section>
      
    </div>
  )
}

export default ScrollSection
