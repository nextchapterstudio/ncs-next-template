// import { Navigation } from "../navigation";
// import { Footer } from "../footer";
import { WithChildren } from '../../types'

export default function Layout({ children }: WithChildren<{}>) {
  return (
    <>
      {/* <Navigation /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
