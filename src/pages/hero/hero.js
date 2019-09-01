import React from "react";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="Hero" aria-label="Hero Section">
      <div className="Hero__card">
        <h2 className="Hero__card-text">
          I was once told that you should be able to tell someone concisely what
          you do in the time it takes you to ride in an elevator. In three words
          I would say:
        </h2>
        <h2 className="Hero__card-text">Coding, Coloring, & Cardio.</h2>
      </div>
    </section>
  )
}


export default Hero
