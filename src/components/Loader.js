import React from 'react';

export default function Loader({ color="#fff", borderWidth="8px", size="80px" }) {
   const childLoaderStyles = {
      borderTopColor: color,
      borderWidth: borderWidth
   }
   
   return (
      <div class="lds-ring" style={{ width: size, height: size }}>
         {[...Array(4)].map(() => <div style={childLoaderStyles} />)}
      </div>
   )
}