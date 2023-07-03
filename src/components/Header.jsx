// import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <nav className='container'>
    <h2>techyStar</h2>
    <main>
       
      <HashLink to={"/#home"}>Home</HashLink>
      <Link to="/Contact">Contact</Link>
      <HashLink to={"/#about"}>about</HashLink>
      <HashLink to={"/#brands"}>brands</HashLink>
      <Link to="/services">services</Link>

    </main>
    </nav>
  );
}

export default Header