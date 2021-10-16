import { default as React, default as React, useState } from 'react';
import EmotionSelections from '../components/FeaturesComponent.js/EmotionSelection';
import InComingFeatures from '../components/FeaturesComponent.js/IncomingFeatures';
import GalaxyBackground from '../components/GalaxyBackground';
import Layout from '../components/Layout';
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
    <Layout>
      <GalaxyBackground>
      <div className="page-wrapper features-container">
        <FeaturesStatus/>
      </div>
      </GalaxyBackground>
    </Layout>
  );
}
