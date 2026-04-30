/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Section colours are referenced via template literals (e.g. `bg-${s.color}`),
  // so they must be safelisted otherwise Tailwind\'s JIT purge drops them.
  safelist: [
    'bg-sectionA', 'bg-sectionB', 'bg-sectionC', 'bg-sectionD',
    'text-sectionA', 'text-sectionB', 'text-sectionC', 'text-sectionD',
    'border-sectionA', 'border-sectionB', 'border-sectionC', 'border-sectionD',
    'bg-sectionA/10', 'bg-sectionB/10', 'bg-sectionC/10', 'bg-sectionD/10',
    'bg-sectionA/15', 'bg-sectionB/15', 'bg-sectionC/15', 'bg-sectionD/15',
    'bg-sectionA/30', 'bg-sectionB/30', 'bg-sectionC/30', 'bg-sectionD/30',
    'border-sectionA/30', 'border-sectionB/30', 'border-sectionC/30', 'border-sectionD/30',
    'border-sectionA/60', 'border-sectionB/60', 'border-sectionC/60', 'border-sectionD/60',
    'ring-sectionA/30', 'ring-sectionB/30', 'ring-sectionC/30', 'ring-sectionD/30'
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Stripe-inspired dark palette
        canvas: '#0A0A14',
        surface: '#0F1020',
        elevated: '#161830',
        hairline: '#23253D',
        ink: {
          DEFAULT: '#F4F5FB',
          muted: '#A7AAC9',
          dim: '#6E7194'
        },
        accent: {
          DEFAULT: '#635BFF',          // Stripe purple
          soft: '#7A73FF',
          dim: '#3D38B8'
        },
        success: '#22C55E',
        warn: '#F59E0B',
        danger: '#EF4444',
        // Section accents
        sectionA: '#7C7BFF',           // analytical — indigo
        sectionB: '#34D399',           // english — emerald
        sectionC: '#F59E0B',           // GK — amber
        sectionD: '#F472B6'            // design — rose
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.28)',
        glow: '0 0 0 1px rgba(99,91,255,0.4), 0 12px 40px rgba(99,91,255,0.18)'
      },
      backgroundImage: {
        'accent-grad': 'linear-gradient(135deg,#635BFF 0%,#A78BFA 100%)',
        'glass': 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.35s cubic-bezier(0.19,1,0.22,1)',
        'slide-up': 'slideUp 0.35s cubic-bezier(0.19,1,0.22,1)',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        pulseSoft: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.65 } }
      }
    }
  },
  plugins: []
};
