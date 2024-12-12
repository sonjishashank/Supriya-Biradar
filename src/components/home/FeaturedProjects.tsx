import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../../lib/constants';
import { Section } from '../shared/Section';
import { Button } from '../shared/Button';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';
import { ArrowRight } from 'lucide-react';

export function FeaturedProjects() {
  return (
    <Section
      title="Featured Projects"
      subtitle="Explore our latest architectural and interior design projects"
      className="bg-gray-50"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {PORTFOLIO_ITEMS.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeIn}
            className="group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src={project.images[0]}
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-serif mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{project.location}</span>
              <span className="mx-2">•</span>
              <span>{project.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          View All Projects
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
}