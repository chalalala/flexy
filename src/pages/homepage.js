import React from 'react';
import GalaxyBackground from '../components/GalaxyBackground';
import HeadingText from '../components/HeadingText';
import CircleButton from '../components/CircleButton';
import Layout from '../components/Layout';
import '../styles/modules/_homepage.scss';

export default function Homepage() {
   return (
      <Layout>
         <GalaxyBackground>
            <div class="page-wrapper homepage-wrapper">
               <div class="homepage__contents animation-fade-up">
                  <HeadingText subtitle="Tell me how you are feeling" title="Calm down with us. Throw away your troubles, double your joy." />
                  <CircleButton buttonText="Start now"  href="/features"/>
               </div>
            </div>
         </GalaxyBackground>
      </Layout>
   )
}