import React from 'react';
import { Section } from '../shared/Section';

export function PortfolioHero() {
  return (
    <Section className="pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Portfolio</h1>
        <p className="text-xl text-gray-600">
          Explore our collection of thoughtfully designed spaces and architectural projects
        </p>
      </div>
    </Section>
  );
}