import React from 'react';
import { Section } from '../shared/Section';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';

const TEAM_MEMBERS = [
  {
    name: 'Ar. Supriya Biradar',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=400&h=400',
    description: 'With expertise in sustainable architecture and modern design.'
  },
  // Add more team members as needed
];

export function TeamSection() {
  return (
    <Section
      title="Our Team"
      subtitle="Meet the creative minds behind our exceptional designs"
      className="bg-gray-50"
    >
      <motion.div
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {TEAM_MEMBERS.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-serif mb-2">{member.name}</h3>
            <p className="text-gray-500 mb-2">{member.role}</p>
            <p className="text-gray-600">{member.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}