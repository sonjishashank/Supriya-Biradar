import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../../lib/constants';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';
import { Section } from '../shared/Section';

interface PortfolioGridProps {
  filter: string;
}

export function PortfolioGrid({ filter }: PortfolioGridProps) {
  const filteredProjects = PORTFOLIO_ITEMS.filter(
    (project) => filter === 'all' || project.category === filter
  );

  return (
    <Section>
      <motion.div
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeIn}
            className="group cursor-pointer"
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
    </Section>
  );
}