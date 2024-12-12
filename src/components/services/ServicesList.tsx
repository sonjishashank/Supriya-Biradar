import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../lib/constants';
import { Section } from '../shared/Section';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';
import * as Icons from 'lucide-react';
import { Button } from '../shared/Button';

export function ServicesList() {
  return (
    <Section>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {SERVICES.map((service) => {
          const Icon = Icons[service.icon as keyof typeof Icons];
          
          return (
            <motion.div
              key={service.id}
              variants={fadeIn}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Icons.Check className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline">Learn More</Button>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}