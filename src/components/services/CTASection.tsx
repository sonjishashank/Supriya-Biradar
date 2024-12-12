import React from 'react';
import { Section } from '../shared/Section';
import { Button } from '../shared/Button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <Section>
      <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Start Your Project?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Let's collaborate to create spaces that inspire and elevate your lifestyle
        </p>
        <Button variant="secondary" size="lg">
          Book a Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </Section>
  );
}