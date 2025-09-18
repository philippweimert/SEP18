import React from 'react';
import { cn } from '../../lib/utils';

// Basis Section Komponente für konsistente Layouts
const Section = React.forwardRef(({ 
  className, 
  children, 
  variant = 'default',
  spacing = 'default',
  background = 'primary',
  ...props 
}, ref) => {
  const baseClasses = 'w-full';
  
  const spacingClasses = {
    compact: 'section-padding-compact',
    default: 'section-padding',
    none: ''
  };
  
  const backgroundClasses = {
    primary: 'bg-acencia-primary-900 text-white',
    light: 'bg-white text-acencia-primary-900',
    accent: 'bg-acencia-primary-400 text-acencia-primary-900',
    transparent: 'bg-transparent'
  };

  return (
    <section
      ref={ref}
      className={cn(
        baseClasses,
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

// Container Komponente für konsistente Inhaltsbreiten
const Container = React.forwardRef(({ 
  className, 
  children, 
  size = 'default',
  ...props 
}, ref) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-[1200px]',
    lg: 'max-w-[1400px]',
    full: 'max-w-none'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'mx-auto px-6 md:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

// Grid Layout Komponente
const Grid = React.forwardRef(({ 
  className, 
  children, 
  cols = 1,
  gap = 'default',
  ...props 
}, ref) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    '12': 'grid-cols-1 lg:grid-cols-12'
  };
  
  const gapClasses = {
    sm: 'gap-4',
    default: 'gap-8',
    lg: 'gap-12'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'grid',
        colsClasses[cols],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

// Card Komponente für konsistente Inhaltsblöcke
const Card = React.forwardRef(({ 
  className, 
  children, 
  variant = 'default',
  hover = false,
  ...props 
}, ref) => {
  const variantClasses = {
    default: 'bg-black/30 backdrop-blur-sm border border-white/10',
    light: 'bg-white border border-gray-200',
    accent: 'bg-acencia-accent/10 border border-acencia-accent/20',
    success: 'bg-green-600/70 border border-green-400/30'
  };
  
  const hoverClasses = hover ? 'card-hover' : '';

  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg p-6',
        variantClasses[variant],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export { Section, Container, Grid, Card };