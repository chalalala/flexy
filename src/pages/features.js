import React, { useState } from 'react';
import EmotionSelections from '../components/FeaturesComponent.js/EmotionSelection';
import InComingFeatures from '../components/FeaturesComponent.js/IncomingFeatures';
import '../styles/modules/_features.scss';

export default function Features() {
  const [selectedEmotion, setSelectedEmotion] = useState({name: '', href: null});

  const FeaturesStatus = () => {
    const isSelectedEmotion = selectedEmotion?.name !== ''
    if(!isSelectedEmotion){
      return <EmotionSelections setSelectedEmotion={setSelectedEmotion}/>
    } else  if(!selectedEmotion?.href){
        return <InComingFeatures/>
      }
  }

  return (
    <div class="bg-galaxy full-height">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="page-wrapper features-container">
        <FeaturesStatus/>
      </div>
    </div>
  );
}
