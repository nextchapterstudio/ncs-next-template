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
        scrollTrigger: {
          trigger: triggerRef.current,
          start:'top top',
          end:"50% left",
          scrub: 0.6,
          pin: true,
          // markers: true,
        },
      }
    )

    const tl = gsap.timeline( { 
   
      scrollTrigger: {
        trigger: "lorem2",
        start: "20",
        scrub: true,
        pin: true,
        markers: true,
        containerAnimation: pin,
      }
      
    });
    
    tl
      .fromTo('.lorem2', { y:150, opacity: 0, duration: 1 },{y:0, opacity: 1, duration:1})
      .to('.lorem2', { y:-150, opacity: 0, duration: 0.5 }, 1)

    const tl3 = gsap.timeline( { 
  
      scrollTrigger: {
        trigger: "scroll-section3",
        start: "20%",
        end: "25%",
        scrub: true,
        // markers: true,
        containerAnimation:pin,
      }
      
    });
      
      tl3
        .fromTo('.lorem3', { y:150, opacity: 0, duration: 1 },{y:0, opacity: 1, duration:1})
        .to('.lorem3', { y:-150, opacity: 0, duration: 0.5 }, 1)

    // ScrollTrigger.create({
    //   trigger: ".scroll-section2",
    //   start: "top top",
    //   end: "+=400",
    //   pin: true,
    // });


    return () => {
         pin.kill()
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
          <div className={cx('scroll-section3', styles.scroll_section_three)}>
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
        <div className={cx('scroll-section4', styles.scroll_section_three)}>
            <Typography
              className="lorem4"
              variant="heading-3"
              alignment="center"
              component="h1"
              maxWidth="md"
            >
              "Each cup of tea represents an imaginary voyage"
            </Typography>
        </div>
      </div>
      
    </section>
  )
}

export default ScrollSection
