import React from 'react';
import HeadingText from '../components/HeadingText';
import CircleButton from '../components/CircleButton';
import Layout from '../components/Layout';
import '../styles/modules/_homepage.scss';

export default function Homepage() {
   return (
      <Layout>
         <div className="page-wrapper homepage-wrapper">
            <div className="homepage__contents animation-fade-up">
               <HeadingText subtitle="Tell me how you are feeling" title="Calm down with us. Throw away your troubles, double your joy." />
               <CircleButton buttonText="Start now"  href="/features"/>
            </div>
         </div>
      </Layout>
   )
}
