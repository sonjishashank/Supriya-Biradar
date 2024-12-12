import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/framer-animations';
import { AboutHero } from '../components/about/AboutHero';
import { AboutContent } from '../components/about/AboutContent';
import { TeamSection } from '../components/about/TeamSection';

export function AboutPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <AboutHero />
      <AboutContent />
      <TeamSection />
    </motion.main>
  );
}