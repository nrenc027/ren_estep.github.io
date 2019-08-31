import React from "react"
import {CodePen, Github, Linkedin, Medium} from "../../components/svgs/index";

import "./contact.css"

const ContactPage = () => (
  <section className="ContactPage">
    <div className="ContactPage__card">
      <h1 className="ContactPage__card-text">Hit me up, I'm Online!</h1>
      <h2 className="ContactPage__card-text">
        <a href="mailto:n.ren.estep@gmail.com" >
          n.ren.estep at gmail
        </a>
      </h2>
      <div className="ContactPage__card-social">
      <a href="https://medium.com/@ren.estep" target="blank"><Medium /></a>
      <a href="https://codepen.io/ren_estep" target="blank"><CodePen /></a>
      <a href="https://github.com/nrenc027" target="blank"><Github /></a>
      <a href="https://www.linkedin.com/in/rencummings/" target="blank"><Linkedin /></a>
      
    
      </div>
    </div>
  </section>
)

export default ContactPage
