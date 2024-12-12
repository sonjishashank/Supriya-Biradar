import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/framer-animations';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { Section } from '../components/shared/Section';

export function ContactPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <ContactHero />
      <Section className="bg-gray-50">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </motion.main>
  );
}