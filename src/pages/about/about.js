import React from "react"
import { Meetup } from "../../components/svgs/index"

import "./about.scss"

const AboutPage = () => {
  return (
    <section className="AboutPage" aria-label="About Section">
      <div className="AboutPage__card">
        <h1>Hi! I'm Ren and this is a little bit about me.</h1>
        <h2 className="AboutPage__card-text">
          I am a software engineer that hails from Dayton, OH. I achieved
          my BFA at Wright State University and received my MFA from
          the University of Tennessee. After that I taught myself to code.
          I am enthusiastic about learning and creative problem-solving. I also am
          the co-founder of the group Imagine Dat with my co-worker Milu Franz. In
          my free time, I like to run and make art.
        </h2>
        <a href="https://www.meetup.com/Imagine-Dat/" target="blank">
          <Meetup />
        </a>
      </div>
    </section>
  )
}

export default AboutPage
