import React from 'react';

export default function GalaxyBackground({children, isFooter = true}) {
   return (
      <div className={isFooter ? "bg-galaxy full-height--w-footer" : "bg-galaxy full-height"}>
         <div id="stars"></div>
         <div id="stars2"></div>
         <div id="stars3"></div>
         {children}
      </div>
   )
}