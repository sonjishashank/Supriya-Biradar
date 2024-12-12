import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../lib/constants';
import { Section } from '../shared/Section';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <Section
      title="Client Testimonials"
      subtitle="What our clients say about their experience working with us"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {TESTIMONIALS.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={fadeIn}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Quote className="w-8 h-8 text-gray-300 mb-4" />
            <p className="text-gray-600 mb-6">{testimonial.content}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}