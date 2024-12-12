import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/framer-animations';
import { Button } from '../shared/Button';

export function ContactForm() {
  return (
    <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-serif mb-6">Send us a Message</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-6"
      >
        {/* Hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          ></textarea>
        </div>
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </motion.div>
  );
}
