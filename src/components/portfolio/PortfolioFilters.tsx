import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'interior', label: 'Interior Design' },
  { id: 'landscape', label: 'Landscape' }
];

export function PortfolioFilters({ activeFilter, onFilterChange }: PortfolioFiltersProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {FILTERS.map((filter) => (
          <motion.button
            key={filter.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(filter.id)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === filter.id
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}