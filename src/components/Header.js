import React from 'react';
import { Link } from "react-router-dom";
import '../styles/modules/_header.scss';

export default function Header() {
   return (
      <div class="header">
         <div class="page-wrapper header-inner">
            <Link to="/">Home</Link>
            <Link to="/">Features</Link>
            <Link to="/">About us</Link>
            <Link to="/">Contact</Link>
         </div>
      </div>
   )
}