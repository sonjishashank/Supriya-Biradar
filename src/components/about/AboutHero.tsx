import React from 'react';
import { Section } from '../shared/Section';

export function AboutHero() {
  return (
    <Section className="pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">About Ar. Supriya Biradar</h1>
        <p className="text-xl text-gray-600">
          Transforming spaces with innovative design solutions and sustainable architecture
        </p>
      </div>
    </Section>
  );
}