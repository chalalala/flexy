import React from 'react';
import { Link } from "react-router-dom";
import '../styles/modules/_header.scss';

export default function Header() {
   return (
      <div class="header">
         <div class="page-wrapper header-inner">
            <Link className="header__link" to="/">Home</Link>
            <Link className="header__link" to="/">Features</Link>
            <Link className="header__link" to="/">About us</Link>
            <Link className="primary-btn" to="/">Contact</Link>
         </div>
      </div>
   )
}