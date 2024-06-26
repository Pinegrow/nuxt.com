import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'
import { pg_colors, pg_fonts, pg_backgrounds } from './themes/pg-tailwindcss/tokens.mjs' // tailwind.config.[ts]

export default <Partial<Config>>{
  plugins: [
    //...
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors, // primary, secondary etc
      fonts: pg_fonts,
      backgrounds: pg_backgrounds // bg-design-image, bg-design-image-large
    })
  ],
  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  get content () {
    const _content = [
      './components/**/*.{js,vue,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue'
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020420'
        },
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  }
}
