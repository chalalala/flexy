import React from 'react';
import '../styles/modules/_heading.scss';

export default function QuotationText({ quote, author }) {
  return (
    <div className="heading-wrapper">
      <q className="heading__title">{quote}</q>
      <div className="heading__author">- {author}</div>
    </div>
  );
}