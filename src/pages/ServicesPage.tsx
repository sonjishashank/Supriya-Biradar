import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/framer-animations';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesList } from '../components/services/ServicesList';
import { ProcessSection } from '../components/services/ProcessSection';
import { CTASection } from '../components/services/CTASection';

export function ServicesPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </motion.main>
  );
}