import React from "react";
import { Link } from "react-router-dom";
import { About, Contact, Resume } from "../svgs/index";
import "./header.scss";

export default ({ siteTitle }) => (
  <header className="Header">
    <section className="Header__title" aria-label="Ren Estep Website">
      <div className="Header__title-hello">
        <p className="Header__title-hello-hello">Hello</p>
        <p>my name is</p>
      </div>
      <p className="Header__title-heading">
        <Link to="/" aria-label="Ren Goes Home">
          {siteTitle}
        </Link>
      </p>
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
);
