import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Link({ href, children, className = '', external = false }: LinkProps) {
  const baseStyles = 'text-gray-600 hover:text-gray-900 transition-colors';

  if (external) {
    return (
      <a
        href={href}
        className={cn(baseStyles, className)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} className={cn(baseStyles, className)}>
      {children}
    </RouterLink>
  );
}