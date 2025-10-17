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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-12 rounded-3xl">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required
          className="px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none"
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required
          className="px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none"
        />
      </div>
      <input 
        type="text" 
        name="company"
        placeholder="Company Name" 
        value={formData.company}
        onChange={handleChange}
        className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none mb-6"
      />
      <textarea 
        name="message"
        placeholder="Tell us about your needs..." 
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full px-6 py-4 rounded-3xl border-2 border-gray-200 focus:border-[#FF5007] focus:outline-none mb-6"
      ></textarea>
      
      <button 
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#FF5007] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff6a2e] transition-all hover:scale-105 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
