import React from 'react';
import { Link } from "react-router-dom";
import './nametag.scss';

const NameTag =()=>(
<span className="Nametag__title" >
<div className="Nametag__hello" aria-hidden="true">
  <p className="Nametag__hello-hello" aria-hidden="true">Hello</p>
  <p className="Nametag__hello-nameIs" aria-hidden="true">my name is</p>
</div>
<p className="Nametag__title-heading" >
  <Link to="/" aria-label="Go to Ren's Home page" >
    <span aria-hidden="true">Ren</span>
  </Link>
</p>
</span>)
export default NameTag;