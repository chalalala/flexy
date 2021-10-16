import React from 'react';
import Layout from '../components/Layout';
import GalaxyBackground from '../components/GalaxyBackground';
import HeadingText from '../components/HeadingText';
import '../styles/modules/_contact.scss';

export default function ContactUs() {
   return (
      <Layout>
         <GalaxyBackground>
            <div class="page-wrapper contact-wrapper">
               <HeadingText subtitle="We are pleased to hear from you" title="Send us your message" />
               <div>
                  <form class="contact-form">
                     <input class="contact__mail" name="contact[email]" type="email" placeholder="Email (optional)" />
                     <textarea class="contact__message" rows="10" name="contact[message]" placeholder="Your message..." required />
                     <button class="primary-btn contact__submit" type="submit">Send</button>
                  </form>
               </div>
            </div>
         </GalaxyBackground>
      </Layout>
   )
}