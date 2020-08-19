import React from "react"
import PropTypes from "prop-types"

import "./resume.css"

const ResumePage = () => {
  document.title = "The Resume of Ren Estep: Creator Of Things"

  return (
    <section className="ResumePage" aria-label="Resume Section">
      <div className="ResumePage__card">
        <h1 className="ResumePage__card-text">
          ...Still Coming soon...
          {/* Education */}
        </h1>
        <h1 className="ResumePage__card-text">
          (́ง◉◞౪◟◉‵)ง
          {/* Skills */}
        </h1>
      </div>
    </section>
  )
}

ResumePage.propTypes = {
  children: PropTypes.node,
}

export default ResumePage
