import React from 'react';
import '../../styles/components/_featuresComponent.scss';
import HeadingText from '../HeadingText';
import StyledButton from '../StyledButton';

export default function EmotionSelections({ setSelectedEmotion }) {
  const listEmotions = [
    {
      name: 'Sad',
      href: null,
    },
    {
      name: 'Disappointed',
      href: null,
    },
    {
      name: 'Angry',
      href: null,
    },
    {
      name: 'Self-deprecating',
      href: null,
    },
    {
      name: 'Happy',
      href: null,
    },
    {
      name: 'Lonely',
      href: null,
    },
  ];

  return (
    <div className="animation-fade-up">
      <HeadingText subtitle="Take a deep breath, and" title="You are..." />
      <div className="featuresComponent-buttonGroup">
        {listEmotions.map(emo => (
          <StyledButton text={emo.name} handleChange={() => setSelectedEmotion(emo)} />
        ))}
      </div>
    </div>
  );
}
