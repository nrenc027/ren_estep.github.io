import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import AboutPage from "./about/about";
import Hero from "../components/hero/hero";
import ContactPage from "./contact/contact";
import ResumePage from "./resume/resume";


import "../pages/index.css"

const Routes = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Hero} />
      <Route  path="/about" component={AboutPage} />
      <Route  path="/resume" component={ResumePage} />
      <Route  path="/contact" component={ContactPage} />
    </Fragment>
  )
}

export default Routes
