import React from 'react';
import '../../styles/components/_featuresComponent.scss';
import CircleButton from '../CircleButton';
import HeadingText from '../HeadingText';
import ReturnBack from './ReturnBack';

export default function InComingFeatures({ onReturnBack }) {
  return (
    <>
      <ReturnBack onClick={onReturnBack} />

      <div className="featuresComponent-contents  animation-fade-up">
        <HeadingText subtitle="Stay tune" title="We will launch soon" textAlign="center" />
        <div className="featuresComponent-circle-wrap">
          <CircleButton href="/aboutUs" buttonText="Take a tour" />
        </div>
      </div>
    </>
  );
}
