import Head from "next/head"
// import Image from "next/image"
// import Fleet from "../components/Fleet"
// import Header from "../components/Header"
// import OurServices from "../components/OurServices"
import styles from "../styles/Home.module.css"
import dynamic from "next/dynamic"
// import AboutUs from "../components/AboutUs"
// import Contacts from "../components/Contacts"
// import Footer from "../components/Footer"
import MainContainer from "../components/MainContainer"
import { scroller } from "react-scroll"
import { useSpring } from "react-spring"
import { useCallback, useState } from "react"
import useInView from "react-cool-inview"
import loadable from "@loadable/component"

const Header = loadable(() => import("../components/Header"), {
  fallback: <div></div>,
})
const OurServices = loadable(() => import("../components/OurServices"), {
  fallback: <div></div>,
})
const Fleet = loadable(() => import("../components/Fleet"), {
  fallback: <div></div>,
})
const AboutUs = loadable(() => import("../components/AboutUs"), {
  fallback: <div></div>,
})
const Contacts = loadable(() => import("../components/Contacts"), {
  fallback: <div></div>,
})
const Footer = loadable(() => import("../components/Footer"), {
  fallback: <div></div>,
})

// const Header = dynamic(() => import("../components/Header"))
// const OurServices = dynamic(() => import("../components/OurServices"))
// const Fleet = dynamic(() => import("../components/Fleet"), {
//   ssr: false,
// })
// const AboutUs = dynamic(() => import("../components/AboutUs"))
// const Contacts = dynamic(() => import("../components/Contacts"))
// const Footer = dynamic(() => import("../components/Footer"))

const scrollToSectionOurServices = () => {
  scroller.scrollTo("OurServices", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}
const scrollToSectionFleet = () => {
  scroller.scrollTo("Fleet", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}
const scrollToSectionAboutUs = () => {
  scroller.scrollTo("AboutUs", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}
const scrollToSectionContacts = () => {
  scroller.scrollTo("Contacts", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}

export const config = {
  unstabe_runtimeJS: false,
}

export default function Home() {
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
  const onScroll = useCallback(
    (e) => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }),
    []
  )

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  })

  // const componentObserver = new IntersectionObserver((entries, observer) => {
  //   console.log(entries)
  // }, {})

  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <MainContainer>
        {/* <Head>
          <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
        </Head> */}

        <div onScroll={onScroll}>
          <header className="Header">
            <Header
              scrollToSectionOurServices={scrollToSectionOurServices}
              scrollToSectionFleet={scrollToSectionFleet}
              scrollToSectionAboutUs={scrollToSectionAboutUs}
              scrollToSectionContacts={scrollToSectionContacts}
            />
          </header>
          {/* <div ref={observe}> */}
          <main>
            <section className="OurServices">
              <OurServices />
            </section>
            {/* </div> */}
            <section ref={observe}>
              <div className="Fleet">{inView && <Fleet />}</div>
            </section>
            <section ref={observe}>
              <div className="AboutUs">{inView && <AboutUs />}</div>
            </section>
            <section className="Contacts">
              <Contacts />
            </section>
          </main>
          <footer className="Footer">
            <Footer />
          </footer>
        </div>
      </MainContainer>
    </>
  )
}
