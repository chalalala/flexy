import React from 'react';
import CircleButton from '../components/CircleButton';
import GalaxyBackground from '../components/GalaxyBackground';
import HeadingText from '../components/HeadingText';
import '../styles/modules/_features.scss';

function IncomingFeature() {
  return (
    <div className="page-wrapper features-container">
      <div className="features-contents  animation-fade-up">
        <HeadingText subtitle="Stay tune" title="We will launch soon" textAlign="center" />
        <div className="features-circle-wrap">
          <CircleButton href="/aboutUs" buttonText="Take a tour" />
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <GalaxyBackground children={<IncomingFeature />} />
  );
}
