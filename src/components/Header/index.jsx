import React from 'react';
import { Link } from "react-router-dom";
import NameTag from 'components/NameTag';
import { About, Contact, Resume } from "components/svgs";

import './header.scss'

export default ()=>{
return <header className="Header">
<NameTag/>
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
}