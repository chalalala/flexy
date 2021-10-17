import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SocialLinks from './SocialLinks';

export default function Layout(props) {
   return (
      <React.Fragment>
         <SocialLinks />
         <div className={`bg-galaxy flex flex-column ${props.hiddenFooter ? "full-height" : "full-height--w-footer"}`}>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            {!props.hiddenHeader && <Header/>}
            {props.children}
         </div>

         {!props.hiddenFooter && <Footer />}
      </React.Fragment>
   )
}