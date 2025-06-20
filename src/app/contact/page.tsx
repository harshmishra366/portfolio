"use client";
import React, { useState } from 'react';

const ContactForm = () => {
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-6">
      <form  className="w-full max-w-lg bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
          
           
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
           
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
           
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
