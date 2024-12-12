import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../shared/Section';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';
import { Lightbulb, PenTool, MessageSquare, Rocket } from 'lucide-react';

const PROCESS_STEPS = [
  {
    icon: Lightbulb,
    title: 'Initial Consultation',
    description: 'We begin with understanding your vision, requirements, and project goals.'
  },
  {
    icon: PenTool,
    title: 'Design Development',
    description: 'Creating detailed designs and plans that align with your vision and budget.'
  },
  {
    icon: MessageSquare,
    title: 'Refinement',
    description: 'Incorporating your feedback and perfecting every detail of the design.'
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'Bringing the design to life with expert execution and project management.'
  }
];

export function ProcessSection() {
  return (
    <Section
      title="Our Process"
      subtitle="How we transform your vision into reality"
      className="bg-gray-50"
    >
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {PROCESS_STEPS.map((step, index) => {
          const Icon = step.icon;
          
          return (
            <motion.div
              key={index}
              variants={fadeIn}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6">
                <Icon className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-serif mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}