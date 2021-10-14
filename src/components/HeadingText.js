import React from 'react';
import '../styles/modules/_heading.scss';

export default function HeadingText(props) {
   return (
      <div className="heading-wrapper">
         <div className="heading__subtitle">{ props.subtitle}</div>
         <div className="heading__title">{ props.title }</div>
      </div>
   )
}