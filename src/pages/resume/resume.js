import React from "react";
import PropTypes from "prop-types"

import "./resume.css"

 const ResumePage =()=>{
    
    return(
        <section className="ResumePage" aria-label="Resume Section">
            <div className="ResumePage__card">
                <h1 className="ResumePage__card-text">
                    Coming soon...
                {/* Education */}
                </h1>
                <h1 className="ResumePage__card-text">
                (́ง◉◞౪◟◉‵)ง
                {/* Skills */}
                </h1>

                
            </div>
        </section>
    );
}

ResumePage.propTypes = {
    children: PropTypes.node,
  }

export default ResumePage;