import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/framer-animations';
import { PortfolioHero } from '../components/portfolio/PortfolioHero';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { PortfolioFilters } from '../components/portfolio/PortfolioFilters';

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = React.useState('all');

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <PortfolioHero />
      <PortfolioFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PortfolioGrid filter={activeFilter} />
    </motion.main>
  );
}