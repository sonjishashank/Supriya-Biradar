import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Testimonials } from '../components/home/Testimonials';
import { fadeIn } from '../lib/framer-animations';

export function HomePage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
    </motion.main>
  );
}