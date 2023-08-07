import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form =useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lxhp4g6', 'template_eb8tf7k', form.current, 'C0oQGXvxHQPa7LS5Q')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>nicholasaahlman@gmail.com</h5>
                    <a href="mailto:nicholasaahlman@gmail.com">Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <FaWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h5>+7733181854</h5>
                    <a href="https://api.whatsapp.com/send?phone=17733181854">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;