/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			'tenor': ['Tenor Sans', 'serif'],
  			'opensans': ['Open Sans', 'sans-serif'],
  			inter: ['Open Sans', 'system-ui', 'sans-serif'],
  			display: ['Tenor Sans', 'serif'],
  			sans: ['Open Sans', 'system-ui', 'sans-serif'],
  			heading: ['Tenor Sans', 'serif'],
  			body: ['Open Sans', 'system-ui', 'sans-serif'],
  		},
  		fontSize: {
  			'xs': ['0.75rem', { lineHeight: '1.4' }],
  			'sm': ['0.875rem', { lineHeight: '1.5' }],
  			'base': ['1rem', { lineHeight: '1.6' }],
  			'lg': ['1.125rem', { lineHeight: '1.7' }],
  			'xl': ['1.25rem', { lineHeight: '1.6' }],
  			'2xl': ['1.5rem', { lineHeight: '1.5' }],
  			'3xl': ['1.875rem', { lineHeight: '1.4' }],
  			'4xl': ['2.25rem', { lineHeight: '1.3' }],
  			'5xl': ['3rem', { lineHeight: '1.2' }],
  			'6xl': ['3.75rem', { lineHeight: '1.1' }],
  			'7xl': ['4.5rem', { lineHeight: '1.1' }],
  			'8xl': ['6rem', { lineHeight: '1' }],
  			'9xl': ['8rem', { lineHeight: '1' }],
  		},
  		fontWeight: {
  			thin: '100',
  			extralight: '200',
  			light: '300',
  			normal: '400',
  			medium: '500',
  			semibold: '600',
  			bold: '700',
  			extrabold: '800',
  			black: '900',
  		},
  		letterSpacing: {
  			tighter: '-0.05em',
  			tight: '-0.025em',
  			normal: '0em',
  			wide: '0.025em',
  			wider: '0.05em',
  			widest: '0.1em',
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			acencia: {
  				// Primärfarben
  				'primary-900': '#001f3d',
  				'primary-400': '#88a9c3', 
  				'primary-50': '#e3ebf2',
  				'white': '#ffffff',
  				// Sekundärfarben  
  				'accent': '#fa9939',
  				'accent-hover': '#e88a33',
  				'accent-active': '#d67b2d',
  				'accent-50': '#f8dcbf',
  				// Legacy Support (für bestehende Verwendung)
  				DEFAULT: '#001f3d',
  				dark: '#001529', 
  				light: '#0d2847',
  				blue: '#88a9c3',
  				'blue-light': '#e3ebf2',
  				orange: '#fa9939',
  				'orange-light': '#f8dcbf'
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.6s ease-out',
  			'slide-up': 'slide-up 0.4s ease-out',
  			'scale-in': 'scale-in 0.3s ease-out',
  			'bounce-subtle': 'bounce-subtle 0.6s ease-out',
  			'shimmer': 'shimmer 2s ease-in-out infinite',
  			'float': 'float 3s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'scale-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'bounce-subtle': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-5px)'
  				}
  			},
  			'shimmer': {
  				'0%': {
  					backgroundPosition: '-200% 0'
  				},
  				'100%': {
  					backgroundPosition: '200% 0'
  				}
  			},
  			'float': {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'pulse-glow': {
  				'0%, 100%': {
  					boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)'
  				},
  				'50%': {
  					boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)'
  				}
  			}
  		},
  		transitionTimingFunction: {
  			'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  			'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
  			'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
  			'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
  		},
  		transitionDuration: {
  			'400': '400ms',
  			'600': '600ms',
  			'800': '800ms',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};