import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-serif">
            Ar. Supriya Biradar
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100">
            <div className="flex flex-col space-y-4 p-4">
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}