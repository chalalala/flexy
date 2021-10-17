import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import GalaxyBackground from '../components/GalaxyBackground';
import HeadingText from '../components/HeadingText';
import emailjs, { init } from 'emailjs-com';
import '../styles/modules/_contact.scss';

export default function ContactUs() {
   const mailInput = useRef();
   const messageInput = useRef();
   const [formResponse, setFormResponse] = useState('');
   const [formStatus, setFormStatus] = useState('');

   const onSubmit = (e) => {
      e.preventDefault();
      
      init(process.env.REACT_APP_EMAILJS_UID);
      const serviceID = process.env.REACT_APP_EMAILJS_SID;
      const templateID = process.env.REACT_APP_EMAILJS_TID;
      
      emailjs.send(serviceID, templateID, {
         email: mailInput.current.value,
         message: messageInput.current.value,
         time: new Date().toString()
      })
      .then(() => {
         setFormResponse('Thank you for your reaching out!');
         setFormStatus('success');
         resetForm();
      }, (err) => {
         setFormResponse("Failed to send message. Try again!");
         setFormStatus('error');
         console.log(JSON.stringify(err));
      });
   }

   const resetForm = () => {
      mailInput.current.value = '';
      messageInput.current.value = '';
   }

   return (
      <Layout>
         <GalaxyBackground>
            <div class="page-wrapper contact-wrapper">
               <HeadingText subtitle="We are pleased to hear from you" title="Send us your message" />
               <div>
                  <form className="contact-form" onSubmit={(e) => onSubmit(e)}>
                     { formStatus && <div className={`contact__response contact__response--${formStatus}`}>{ formResponse }</div>}
                      <input className="contact__mail" type="email" placeholder="Email (optional)" ref={mailInput} />
                     <textarea className="contact__message" rows="10" name="contact[message]" placeholder="Your message..."
                        ref={messageInput} />
                     <button className="primary-btn contact__submit" type="submit">Send</button>
                  </form>
               </div>
            </div>
         </GalaxyBackground>
      </Layout>
   )
}