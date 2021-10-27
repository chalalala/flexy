import React from 'react';
import { Link } from "react-router-dom";
import '../styles/modules/_header.scss';

export default function Header() {
   return (
      <div className="header">
         <div className="page-wrapper header-inner">
            <Link className="header__link" to="/">Home</Link>
            <Link className="header__link" to="/features">Features</Link>
            <Link className="header__link" to="/about-us">About us</Link>
            <Link className="primary-btn" to="/contact">Contact</Link>
         </div>
      </div>
   )
}