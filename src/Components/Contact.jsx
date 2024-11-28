import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_51d97yc', 'template_kes5qae', formData, 'Zf1wwkxU2EdTLrkSq')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ email: '', subject: '', message: '' }); // Reset form
      }, (err) => {
        console.error('Failed to send email. Error:', err);
        setErrorMessage('Failed to send your message, please try again later.');
      });
  };

  return (
    <section id='Contacts'>
      <div className="py-8 lg:py-24 px-4 mx-auto max-w-screen-md">
        <h2 className="text-4xl sm:text-6xl lg:text-5xl text-center tracking-wide bg-gradient-to-r from-green-500 to-green-900 font-bold text-transparent bg-clip-text">Contact Us</h2>
        <p className="text-md mt-5 p-2 mb-5 text-black text-center">Contact us today for personalized crop prediction solutions tailored to your farming needs. Our dedicated team is here to support your success—let’s cultivate a brighter future together!</p>
        
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-8 bg-white bg-opacity-10 backdrop-blur-md border-2 border-gray-300 rounded-lg shadow-lg shadow-gray-500 p-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave your message..."
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-green-500 to-green-900 py-3 px-4 mx-3 rounded-md">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;










