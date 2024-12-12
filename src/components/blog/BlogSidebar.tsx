import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/framer-animations';
import { Search } from 'lucide-react';

const CATEGORIES = [
  { name: 'Architecture', count: 12 },
  { name: 'Interior Design', count: 8 },
  { name: 'Sustainability', count: 6 },
  { name: 'Trends', count: 4 }
];

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-serif mb-4">Search</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-serif mb-4">Categories</h3>
        <ul className="space-y-3">
          {CATEGORIES.map((category) => (
            <li key={category.name}>
              <button className="flex items-center justify-between w-full text-left hover:text-gray-600 transition-colors">
                <span>{category.name}</span>
                <span className="text-gray-500 text-sm">{category.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}