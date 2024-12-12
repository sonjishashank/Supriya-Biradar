import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

export function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="relative aspect-[4/3] overflow-hidden rounded-lg"
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}