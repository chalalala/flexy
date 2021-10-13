import React from 'react';
import '../styles/modules/_heading.scss';

export default function HeadingText(props) {
   return (
      <div class="heading-wrapper">
         <div class="heading__subtitle">{ props.subtitle}</div>
         <div class="heading__title">{ props.title }</div>
      </div>
   )
}