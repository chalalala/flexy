import React, { useRef, useState } from 'react';
import Layout from '../components/Layout';
import HeadingText from '../components/HeadingText';
import emailjs, { init } from 'emailjs-com';
import '../styles/modules/_contact.scss';
import Loader from '../components/Loader';

export default function ContactUs() {
   const mailInput = useRef();
   const messageInput = useRef();
   const [formResponse, setFormResponse] = useState('');
   const [formStatus, setFormStatus] = useState('');
   const [loading, setLoading] = useState(false);

   const onSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

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
         setLoading(false);
      }, (err) => {
         setFormResponse("Failed to send message. Try again!");
         setFormStatus('error');
         setLoading(false);
         console.log(JSON.stringify(err));
      });
   }

   const resetForm = () => {
      mailInput.current.value = '';
      messageInput.current.value = '';
   }

   return (
      <Layout>
         <div class="page-wrapper contact-wrapper">
            <HeadingText subtitle="We are pleased to hear from you" title="Send us your message" />
            <div>
               <form className="contact-form" onSubmit={(e) => onSubmit(e)}>
                  { formStatus && <div className={`contact__response contact__response--${formStatus}`}>{ formResponse }</div>}
                     <input className="contact__mail" name="contact[email]" type="email" placeholder="Email (optional)" ref={mailInput} />
                  <textarea className="contact__message" rows="10" name="contact[message]" placeholder="Your message..." ref={messageInput} required />
                  <button className="primary-btn contact__submit" type="submit">
                     { loading ? <Loader color="#5A5F63" size="25px" borderWidth="4px" /> : "Send" }
                  </button>
               </form>
            </div>
         </div>
      </Layout>
   )
}