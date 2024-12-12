import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '../layout/Link';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Crafting Spaces That Inspire
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Elegant Architecture & Interior Design in Pune
          </p>
          <div className="flex gap-4">
            <Link 
              href="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
            <Link 
              href="/portfolio"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}