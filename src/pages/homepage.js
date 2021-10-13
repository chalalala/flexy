import React from 'react';
import HeadingText from '../components/HeadingText';
import CircleButton from '../components/CircleButton';
import '../styles/modules/_homepage.scss';

export default function Homepage() {
   return (
      <div class="bg-galaxy full-height">
         <div class="page-wrapper homepage-wrapper">
            <div class="homepage__contents">
               <HeadingText subtitle="Tell me how you are feeling" title="Calm down with us. Throw away your troubles, double your joy." />
               <CircleButton buttonText="Start now" />
            </div>
         </div>
      </div>   
   )
}