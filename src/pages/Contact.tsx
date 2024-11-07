import React from 'react';
import { useState } from 'react';


const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      const phoneNumber = '573217840789'; 
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
  };

  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmitEmail = (e) => {
      e.preventDefault();
      const email = 'rmrpinchao@gmail'; 
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
  <section className="contact">
    <div className='links'>
      <h2>Contact</h2>
      <p className='a-contact'><strong>Email:  </strong><a href='mailto:rmrpinchao@gmail'>rmrpinchao@gmail.com</a></p>
      <p className='a-contact'>  <strong>Phone:  </strong> <a href="tel:+573217840789">+57 321 784 07 89</a></p>
      <p className='a-contact'><strong>Whatsapp:  </strong> <a href="https://wa.me/+573217840789" target="_blank">Whatsapp</a></p>
      <p className='a-contact'><strong>Github:  </strong> <a href="https://github.com/PinchaoRamiro">PinchaoRamiro</a></p>
      <p className='a-contact'><strong>Linkedin:  </strong> <a href="https://www.linkedin.com/in/ramiro-antonio-pinchao-chachinoy-5038a931b">ramiro-antonio-pinchao-chachinoy</a></p>
    </div>
    <div className='forms'>
      <form className='form-whatsapp' onSubmit={handleSubmit}>
        <h2>Write your whatsApp message here</ h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here"
          required
          rows={1} 
        />
        <button className='btn-whatsapp' type="submit">Send</button>
      </form>
      <form className='form-email' onSubmit={handleSubmitEmail}>
        <h2>Write your email from here </h2>
        <input 
          type="text" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          placeholder="Subject " 
          required 
        />
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          placeholder="Write your message here" 
          required 
        ></textarea>
        <button className='btn-email' type="submit">Send mail</button>
        </form>
    </div>
  </section>
  );
};

export default Contact;
