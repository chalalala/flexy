import React from "react";
import '../../styles/components/_featuresComponent.scss';
import CircleButton from "../CircleButton";
import HeadingText from "../HeadingText";

export default function InComingFeatures() {
  return (
    <div className="featuresComponent-contents  animation-fade-up">
      <HeadingText subtitle="Stay tune" title="We will launch soon" textAlign="center" />
      <div className="featuresComponent-circle-wrap">
        <CircleButton href="/aboutUs" buttonText="Take a tour" />
      </div>
    </div>
  )
}