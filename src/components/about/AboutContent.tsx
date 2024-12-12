import React from 'react';
import { Section } from '../shared/Section';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/framer-animations';

export function AboutContent() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={fadeIn}>
          <img
            src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?fit=crop&w=800&h=600"
            alt="Ar. Supriya Biradar"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div variants={fadeIn}>
          <h2 className="text-3xl font-serif mb-6">Our Design Philosophy</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              With over a decade of experience in architecture and interior design,
              we believe in creating spaces that seamlessly blend functionality with aesthetics.
            </p>
            <p>
              Our approach focuses on sustainable design practices and innovative solutions
              that enhance the quality of life for our clients.
            </p>
            <p>
              Every project is a unique opportunity to create something extraordinary,
              tailored to our client's vision and needs.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}