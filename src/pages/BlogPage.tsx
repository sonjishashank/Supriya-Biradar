import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../lib/framer-animations';
import { BlogHero } from '../components/blog/BlogHero';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogSidebar } from '../components/blog/BlogSidebar';
import { Section } from '../components/shared/Section';

export function BlogPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <BlogHero />
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <BlogGrid />
          </div>
          <BlogSidebar />
        </div>
      </Section>
    </motion.main>
  );
}