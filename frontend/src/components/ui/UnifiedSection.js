import React from 'react';

// Einheitliche Section-Komponente für konsistente Abstände
export const UnifiedSection = ({ 
  children, 
  variant = 'standard', 
  background = 'primary',
  className = '',
  noPadding = false
}) => {
  const variantClasses = {
		standard: 'py-10 md:py-16', // Einheitlich 40px mobile, 64px desktop
		compact: 'py-6 md:py-10',   // Kompakter für weniger wichtige Bereiche
		hero: 'py-14 md:py-20',      // Hero Sections
		tight: 'py-4 md:py-6',       // Sehr kompakt
    none: ''                      // Kein Padding
  };

  const backgroundClasses = {
    primary: 'bg-[#001f3d]',
    dark: 'bg-[#001529]',
    gradient: 'bg-gradient-to-b from-[#001f3d] to-[#0d2847]',
    transparent: 'bg-transparent'
  };

  return (
    <section 
      className={`
        ${noPadding ? '' : variantClasses[variant]}
        ${backgroundClasses[background]}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

// Container-Komponente für einheitliche Breite und Padding
export const UnifiedContainer = ({ children, className = '', size = 'standard' }) => {
  const sizeClasses = {
    standard: 'max-w-[1200px]',
    wide: 'max-w-[1400px]',
    narrow: 'max-w-[1000px]',
    full: 'max-w-full'
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
};

// Einheitliche Card-Komponente
export const UnifiedCard = ({ 
  children, 
  hover = true, 
  accent = false,
  compact = false,
  className = '' 
}) => {
  return (
    <div 
      className={`
        bg-black/30 backdrop-blur-sm rounded-lg border border-white/10
        ${compact ? 'p-6' : 'p-8'}
        ${hover ? 'transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:border-acencia-accent/30' : ''}
        ${accent ? 'border-acencia-accent/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// Einheitliche Heading-Komponente
export const UnifiedHeading = ({ 
  level = 1, 
  children, 
  accent = false,
  className = '' 
}) => {
  const Tag = `h${level}`;
  
  const sizeClasses = {
    1: 'text-5xl md:text-6xl font-semibold leading-tight tracking-tight',
    2: 'text-3xl md:text-4xl font-semibold leading-tight tracking-tight',
    3: 'text-2xl md:text-3xl font-medium leading-tight',
    4: 'text-xl md:text-2xl font-medium'
  };

  if (accent && typeof children === 'string') {
    // Split text to add accent to last word or specific part
    const words = children.split(' ');
    const lastWord = words.pop();
    const restText = words.join(' ');
    
    return (
      <Tag className={`text-white ${sizeClasses[level]} ${className}`}>
        {restText} <span className="text-acencia-accent">{lastWord}</span>
      </Tag>
    );
  }

  return (
    <Tag className={`text-white ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
};

// Einheitliche Button-Komponente
export const UnifiedButton = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  icon = null,
  onClick,
  className = '',
  ...props 
}) => {
  const variantClasses = {
    primary: 'bg-acencia-accent hover:bg-acencia-accent-hover text-white',
    secondary: 'bg-transparent border-2 border-acencia-accent/50 text-white hover:bg-acencia-accent/10 hover:border-acencia-accent',
    ghost: 'bg-white/10 text-white hover:bg-white/20'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        rounded-lg font-medium transition-all duration-200
        flex items-center justify-center gap-2
        hover:transform hover:-translate-y-0.5 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-acencia-accent focus:ring-offset-2 focus:ring-offset-[#001f3d]
        ${className}
      `}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

// Einheitliche Grid-Komponente
export const UnifiedGrid = ({ 
  children, 
  cols = 2,
  gap = 'medium',
  className = '' 
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    small: 'gap-4',
    medium: 'gap-6 md:gap-8',
    large: 'gap-8 md:gap-12'
  };

  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

// Feature List Komponente
export const UnifiedFeatureList = ({ items, className = '' }) => {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-acencia-accent rounded-full mt-2.5 flex-shrink-0"></div>
          <span className="text-gray-300 text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default {
  UnifiedSection,
  UnifiedContainer,
  UnifiedCard,
  UnifiedHeading,
  UnifiedButton,
  UnifiedGrid,
  UnifiedFeatureList
};