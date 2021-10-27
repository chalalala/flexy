import React from 'react';
import HeadingText from '../components/HeadingText';
import Layout from '../components/Layout';
import QuotationText from '../components/QuotationText';
import '../styles/modules/_aboutUs.scss';
import '../styles/modules/_heading.scss';

export default function AboutUs() {
  return (
    <Layout>
      <div className="page-wrapper aboutUs-wrapper">
        <div className="aboutUs__contents animation-fade-up">
          <div className="aboutUs__column">
            <QuotationText quote={"Your mind will answer most questions if you learn to relax and wait for the answer."} author={"William S. Burroughs"} />
          </div>
          <div className="aboutUs__column">
            <HeadingText subtitle={"Life is always busy. We get caught up in the chaos of life and forget to have time for ourselves. Sometimes, we get lost. Sometimes we feel lonely and empty."} />
            <HeadingText subtitle={"But don’t be scare.  Just take a deep breath and relax yourself. Everything will be fine."} />
            <HeadingText subtitle={"Our wish is to create a place where we can..."} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
