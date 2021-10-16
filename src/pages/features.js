import React from 'react';
import CircleButton from '../components/CircleButton';
import HeadingText from '../components/HeadingText';
import '../styles/modules/_features.scss';
export default function Features() {
  return (
    <div class="bg-galaxy full-height">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="page-wrapper features-container">
        <div className="features-contents  animation-fade-up">
          <HeadingText subtitle="Stay tune" title="We will launch soon" textAlign="center" />
          <div className="features-circle-wrap">
            <CircleButton href="/aboutUs" buttonText="Take a tour" />
          </div>
        </div>
      </div>
    </div>
  );
}
