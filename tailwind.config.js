module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      msm: '380px',
      // => @media (min-width: 380px) { ... }

      nsm: '428px',
      // => @media (min-width: 428px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lm: '892px',
      // => @media (min-width: 892px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

    },
    
  },
  plugins: [],
};