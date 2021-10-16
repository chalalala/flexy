import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SocialLinks from './SocialLinks';

export default function Layout(props) {
   return (
      <React.Fragment>
         {props?.hiddenHeader ? null : <Header />}
         <SocialLinks />
         {props.children}
         {props?.hiddenFooter ? null : <Footer />}
      </React.Fragment>
   )
}