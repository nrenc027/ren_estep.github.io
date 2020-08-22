import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AboutPage from "./about";
import Home from "./home";
import ContactPage from "./contact";
import ResumePage from "./resume";
import { About, Contact, Resume } from "../components/svgs";
import "./styles.scss";

export default ({ children }) => {
  return (
    <Router>
      <header className="Header">
        <span className="Header__title" aria-label="Ren Estep Website">
          <div className="Header__title-hello">
            <p className="Header__title-hello-hello">Hello</p>
            <p className="Header__title-hello-nameIs">my name is</p>
          </div>
          <p className="Header__title-heading">
            <Link to="/" aria-label="Ren Goes Home">
              Ren
            </Link>
          </p>
        </span>
        <nav className="Header__nav">
          <Link className="Header__nav-link" to="/about">
            <About />
          </Link>
          <Link className="Header__nav-link" to="/resume">
            <Resume />
          </Link>
          <Link className="Header__nav-link" to="/contact">
            <Contact />
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
