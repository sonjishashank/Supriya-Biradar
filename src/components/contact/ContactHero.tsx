import React from 'react';
import { Section } from '../shared/Section';

export function ContactHero() {
  return (
    <Section className="pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          Let's discuss your project and create something extraordinary together
        </p>
      </div>
    </Section>
  );
}