'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    
    try {
      // Formspree endpoint
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mvglzwzd';
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || '',
          message: formData.message,
          _replyto: formData.email, // Sets reply-to field
          _subject: `New Contact Form Submission from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`
        })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 sm:p-8 lg:p-12 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none text-sm sm:text-base"
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none text-sm sm:text-base"
        />
      </div>
      <input 
        type="text" 
        name="company"
        placeholder="Company Name" 
        value={formData.company}
        onChange={handleChange}
        className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none mb-6 text-sm sm:text-base"
      />
      <textarea 
        name="message"
        placeholder="Tell us about your needs..." 
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-3xl border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none mb-6 text-sm sm:text-base resize-none"
      ></textarea>
      
      <button 
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#FF5007] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#ff6a2e] transition-all hover:scale-105 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600 text-center">{errorMessage || 'Something went wrong. Please try again.'}</p>
      )}
    </form>
  );
}
