import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../lib/framer-animations';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Top Architecture Trends in Pune for 2024',
    excerpt: "Discover the latest architectural trends shaping Pune's skyline and residential spaces.",
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fit=crop&w=800&h=450',
    date: '2024-03-15',
    category: 'Trends'
  },
  {
    id: '2',
    title: 'Sustainable Design: Creating Eco-Friendly Spaces',
    excerpt: 'Learn how sustainable design practices can create beautiful and environmentally conscious spaces.',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?fit=crop&w=800&h=450',
    date: '2024-03-10',
    category: 'Sustainability'
  }
];

export function BlogGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      className="space-y-12"
    >
      {BLOG_POSTS.map((post) => (
        <motion.article
          key={post.id}
          variants={fadeIn}
          className="group"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{post.category}</span>
            </div>
            <h2 className="text-2xl font-serif group-hover:text-gray-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <button className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
              Read More →
            </button>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}