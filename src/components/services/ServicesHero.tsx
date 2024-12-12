import React from 'react';
import { Section } from '../shared/Section';

export function ServicesHero() {
  return (
    <Section className="pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive architectural and interior design solutions tailored to transform your vision into reality
        </p>
      </div>
    </Section>
  );
}