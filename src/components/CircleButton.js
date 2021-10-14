import React from 'react';
import iconPlay from '../assets/icon-play-button.svg';
import '../styles/modules/_buttons.scss';

export default function CircleButton(props) {
   return (
      <a href={props.href} className="flex align-items-center circle-btn">
         <img src={iconPlay} className="circle-btn__icon" alt="start-button" />
         { props.buttonText ? <div className="circle-btn__text">{props.buttonText}</div> : null }
      </a>
   )
}