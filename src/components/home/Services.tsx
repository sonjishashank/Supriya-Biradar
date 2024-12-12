import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../lib/constants';
import { Section } from '../shared/Section';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';
import * as Icons from 'lucide-react';

export function Services() {
  return (
    <Section
      title="Our Services"
      subtitle="Comprehensive architectural and interior design solutions tailored to your needs"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {SERVICES.map((service) => {
          const Icon = Icons[service.icon as keyof typeof Icons];
          
          return (
            <motion.div
              key={service.id}
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-500">
                    • {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}