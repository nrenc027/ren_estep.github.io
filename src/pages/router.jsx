import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AboutPage from "./about";
import Home from "./home";
import ContactPage from "./contact";
import ResumePage from "./resume";
import { About, Contact, Resume } from "../components/svgs";
import "../components/header/header.scss";

import "./styles.scss";

export default ({ children }) => {
  return (
    <Router>
      <header className="Header">
        <section className="Header__title" aria-label="Ren Estep Website">
          <div className="Header__title-hello">
            <h1>Hello</h1>
            <p>my name is</p>
          </div>
          <h1 className="Header__title-heading">
            <Link to="/" aria-label="Ren Goes Home">
              Ren
            </Link>
          </h1>
        </section>
        <nav className="Header__nav">
          <Link className="Header__nav-link" to="/about">
            <About />
            <h2>About</h2>
          </Link>
          <Link className="Header__nav-link" to="/resume">
            <Resume />
            <h2>Resume</h2>
          </Link>
          <Link className="Header__nav-link" to="/contact">
            <Contact />
            <h2>Contact</h2>
          </Link>
        </nav>
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
