import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaSearchLocation } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '573217840789';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const email = 'rmrpinchao@gmail.com';
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-gray-800 text-white px-6 py-12 font-[Times_New_Roman]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LINKS */}
        <div className="space-y-5 animate-fade-right">
          <h2 className="text-3xl font-bold text-blue-600 mb-4 flex items-center gap-2">
            <FaSearchLocation className="text-blue-600" /> Contact
          </h2>

          <p className="text-lg flex items-center gap-2">
            <FaEnvelope className="text-lime-300" />
            <strong>Email: </strong>
            <a className="text-lime-300 hover:underline" href="mailto:rmrpinchao@gmail.com">rmrpinchao@gmail.com</a>
          </p>

          <p className="text-lg flex items-center gap-2">
            <FaPhoneAlt className="text-lime-300" />
            <strong>Phone: </strong>
            <a className="text-lime-300 hover:underline" href="tel:+573217840789">+57 321 784 07 89</a>
          </p>

          <p className="text-lg flex items-center gap-2">
            <FaWhatsapp className="text-lime-300" />
            <a className="text-lime-300 hover:underline" href="https://wa.me/+573217840789" target="_blank">Whatsapp</a>
          </p>

          <p className="text-lg flex items-center gap-2">
            <FaGithub className="text-lime-300" />
            <strong>Github: </strong>
            <a className="text-lime-300 hover:underline" href="https://github.com/PinchaoRamiro" target="_blank">PinchaoRamiro</a>
          </p>

          <p className="text-lg flex items-center gap-2">
            <FaLinkedin className="text-lime-300" />
            <strong>LinkedIn: </strong>
            <a className="text-lime-300 hover:underline" href="https://www.linkedin.com/in/ramiro-antonio-pinchao-chachinoy-5038a931b" target="_blank">
              ramiro-antonio-pinchao-chachinoy
            </a>
          </p>
        </div>

        {/* FORMS */}
        <div className="space-y-8">
          {/* WhatsApp Form */}
          <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-xl shadow-lg shadow-cyan-500/10">
            <h3 className="text-xl font-semibold mb-4 text-cyan-300 flex items-center gap-2">
              <FaWhatsapp /> Send WhatsApp Message
            </h3>
            <textarea
              className="w-full p-3 rounded bg-black text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              rows={3}
              placeholder="Write your WhatsApp message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-4 w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-500 rounded text-white font-bold transition"
            >
              Send via WhatsApp
            </button>
          </form>

          {/* Email Form */}
          <form onSubmit={handleSubmitEmail} className="bg-neutral-800 p-6 rounded-xl shadow-lg shadow-lime-500/10">
            <h3 className="text-xl font-semibold mb-4 text-lime-300 flex items-center gap-2">
              <FaEnvelope /> Send Email
            </h3>
            <input
              type="text"
              className="w-full p-3 rounded bg-black text-white border border-lime-500 mb-4 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              className="w-full p-3 rounded bg-black text-white border border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
              rows={4}
              placeholder="Write your email message..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-4 w-full py-2 px-4 bg-lime-600 hover:bg-lime-500 rounded text-white font-bold transition"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
