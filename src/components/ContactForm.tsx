'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-xl bg-black/60 border-1 border-fiaca-violet text-white placeholder-gray-400 shadow-lg focus:border-fiaca-yellow focus:ring-2 focus:ring-fiaca-yellow transition-all duration-200 px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-xl bg-black/60 border-1 border-fiaca-violet text-white placeholder-gray-400 shadow-lg focus:border-fiaca-yellow focus:ring-2 focus:ring-fiaca-yellow transition-all duration-200 px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-xl bg-black/60 border-1 border-fiaca-violet text-white placeholder-gray-400 shadow-lg focus:border-fiaca-yellow focus:ring-2 focus:ring-fiaca-yellow transition-all duration-200 px-4 py-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full rounded-xl bg-black/60 border-1 border-fiaca-violet text-white placeholder-gray-400 shadow-lg focus:border-fiaca-yellow focus:ring-2 focus:ring-fiaca-yellow transition-all duration-200 px-4 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fiaca-violet hover:bg-fiaca-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffe14b]"
      >
        Enviar Mensaje
      </button>
    </form>
  );
} 