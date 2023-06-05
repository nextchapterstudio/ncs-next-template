import ScrollSection from 'components/page-sections/scrollsection/ScrollSection'
import { Section1 } from 'components/page-sections/section1'
import Section2 from 'components/page-sections/section2/Section2'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <ScrollSection />
      <Section1 />
      <Section2 />
    </>
  )
}

export default Home
