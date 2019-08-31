
import React from "react";
import PropTypes from "prop-types"
import {Meetup} from "../../components/svgs/index";

import "./about.css"

 const AboutPage =()=>{
    
    return(
        <section className="AboutPage" aria-label="About Section">
            <div className="AboutPage__card">
                <h2 className="AboutPage__card-text">
                Ren is a software engineer that hails from Dayton, OH. She achieved her BFA at Wright State University. She received her MFA in 2011 from the University of Tennessee, after which she taught herself to code. She is enthusiastic about learning and creative problem-solving. She is a co-founder of the group Imagine Dat with co-worker Milu Franz. In her free time, she likes to run and make art.
                </h2>
                <a href="https://www.meetup.com/Imagine-Dat/" target="blank"><Meetup/></a>

                
            </div>
        </section>
    );
}

AboutPage.propTypes = {
    children: PropTypes.node,
  }

export default AboutPage;