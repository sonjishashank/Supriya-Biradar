import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Ar. Supriya Biradar</h3>
            <p className="text-gray-600">
              Creating inspiring spaces through innovative architecture and interior design.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block">About</Link>
              <Link href="/portfolio" className="block">Portfolio</Link>
              <Link href="/services" className="block">Services</Link>
              <Link href="/blog" className="block">Blog</Link>
              <Link href="/contact" className="block">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Pratibha Residency, C-41, Shri Siddhi Garden, Sasane Nagar, Hadapsar, Pune
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +91 XXXXXXXXXX
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                contact@supriyabiradar.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="hover:text-pink-600">
                <Instagram />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-600">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Ar. Supriya Biradar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}