import React from 'react';
import { Section } from '../shared/Section';

export function BlogHero() {
  return (
    <Section className="pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Design Insights</h1>
        <p className="text-xl text-gray-600">
          Explore our latest articles on architecture, interior design, and industry trends
        </p>
      </div>
    </Section>
  );
}