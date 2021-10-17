import React from 'react';

export default function Loader({ color="#fff", borderWidth="8px", size="80px" }) {
   return (
      <div class="lds-ring" style={{ width: size, height: size }}>
         <div style={{ borderTopColor: color, borderWidth: borderWidth }}></div>
         <div style={{ borderTopColor: color, borderWidth: borderWidth }}></div>
         <div style={{ borderTopColor: color, borderWidth: borderWidth }}></div>
         <div style={{ borderTopColor: color, borderWidth: borderWidth }}></div>
      </div>
   )
}