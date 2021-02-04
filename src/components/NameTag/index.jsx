import React from 'react';
import { Link } from "react-router-dom";
import './nametag.scss';

export default ()=>(
<span className="Nametag__title" aria-label="Ren Estep Website">
<div className="Nametag__hello">
  <p className="Nametag__hello-hello">Hello</p>
  <p className="Nametag__hello-nameIs">my name is</p>
</div>
<p className="Nametag__title-heading">
  <Link to="/" aria-label="Ren Goes Home">
    Ren
  </Link>
</p>
</span>)