import React from 'react';
import '../styles/modules/_heading.scss';

export default function HeadingText({ subtitle, title, textAlign = 'left' }) {
  return (
    <div className="heading-wrapper" style={{ textAlign: textAlign }}>
      <div className="heading__subtitle">{subtitle}</div>
      <div className="heading__title">{title}</div>
    </div>
  );
}
