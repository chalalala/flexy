import React from 'react';
import iconPlay from '../assets/icon-play-button.svg';
import { Link } from 'react-router-dom';
export default function CircleButton(props) {
  return (
    <Link className="flex align-items-center circle-btn" to={props.href || '/'}>
      <img src={iconPlay} className="circle-btn__icon" alt="start-button" />
      {props.buttonText ? <div className="circle-btn__text">{props.buttonText}</div> : null}
    </Link>
  );
}
