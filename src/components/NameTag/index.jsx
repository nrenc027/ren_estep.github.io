import React from 'react';
import { Link } from "react-router-dom";
import './nametag.scss';

const NameTag =()=>(
<span className="Nametag__title" aria-label="Ren Estep Website">
<div className="Nametag__hello">
  <p className="Nametag__hello-hello">Hello</p>
  <p className="Nametag__hello-nameIs">my name is</p>
</div>
<p className="Nametag__title-heading">
  <Link to="/" aria-label="Go Home">
    Ren
  </Link>
</p>
</span>)
export default NameTag;