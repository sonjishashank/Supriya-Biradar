import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/framer-animations';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function Section({ children, className = '', title, subtitle }: SectionProps) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn('py-16 md:py-24', className)}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <motion.h2 
                variants={fadeIn}
                className="text-3xl md:text-4xl font-serif mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                variants={fadeIn}
                className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}