import { default as React, useState } from 'react';
import EmotionSelections from '../components/FeaturesComponent/EmotionSelection';
import InComingFeatures from '../components/FeaturesComponent/IncomingFeatures';
import GalaxyBackground from '../components/GalaxyBackground';
import Layout from '../components/Layout';
import '../styles/modules/_features.scss';

export default function Features() {
  const defaultEmotion = { name: '', href: null };
  const [selectedEmotion, setSelectedEmotion] = useState(defaultEmotion);

  const FeaturesStatus = () => {
    const isSelectedEmotion = selectedEmotion?.name !== '';
    if (!isSelectedEmotion) {
      return <EmotionSelections setSelectedEmotion={setSelectedEmotion} />;
    } else if (!selectedEmotion?.href) {
      return <InComingFeatures onReturnBack={() => setSelectedEmotion(defaultEmotion)} />;
    }
  };

  return (
    <Layout>
      <div className="page-wrapper features-container">
        <FeaturesStatus />
      </div>
    </Layout>
  );
}
