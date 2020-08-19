import React from "react"
import PropTypes from "prop-types"

import "./resume.css"

const ResumePage = () => {
  document.title = "The Resume of Ren Estep: Creator Of Things"

  return (
    <section className="ResumePage" aria-label="Resume Section">
      <div className="ResumePage__card">
        <h2 className="ResumePage__card-text">
          ...Still Coming soon...
          {/* Education */}
        </h2>
        <h2 className="ResumePage__card-text">
          (́ง◉◞౪◟◉‵)ง
          {/* Skills */}
        </h2>
      </div>
    </section>
  )
}

ResumePage.propTypes = {
  children: PropTypes.node,
}

export default ResumePage
