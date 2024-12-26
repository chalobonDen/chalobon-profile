import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#66569C',
        second: '#83C7A3',
        red: {
          50: '#FFE1DF',
          350: '#FF3B30',
        },
        black: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          150: '#D9D9D9',
          200: '#D1D1D1',
          250: 'rgba(111, 132, 230, 0.3)',
          400: '#888888',
          450: '#9EA8B3',
          700: '#4F4F4F',
          750: '#020202',
          950: '#313131',
        },
        green: {
          50: '#DFF9E5',
          550: '#34C759',
        },
        blue: {
          550: '#007AFF',
        },
        purple: {
          550: '#AF52DE',
        },
        warning: {
          100: '#FFBE0B',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ matchUtilities, addComponents, theme }) {
      matchUtilities(
        {
          square: (value) => ({
            width: value,
            height: value,
          }),
        },
        {
          values: theme('spacing'),
        },
      )

      addComponents({
        // ทำให้มี space ซ้าย ขวา
        '.main-space-x': {
          padding: `0px ${theme('spacing.16')}`,
          '@media (max-width: 1366px)': {
            padding: `0px ${theme('spacing.12')}`,
          },
          '@media (max-width: 640px)': {
            padding: `0px ${theme('spacing.4')}`,
          },
          '@media (max-width: 340px)': {
            padding: `0px ${theme('spacing.3')}`,
          },
        },
        // ทำให้ element ที่อยู่ข้างใน main-space-x ไม่่โดน padding จาก main-space-x
        // NOTE: ใช้สำหรับ element ที่อยู่ใน main-space-x เท่านั้น
        '.replace-main-space-x': {
          margin: `0px -${theme('spacing.16')}`,
          '@media (max-width: 1366px)': {
            margin: `0px -${theme('spacing.12')}`,
          },
          '@media (max-width: 640px)': {
            margin: `0px -${theme('spacing.4')}`,
          },
          '@media (max-width: 340px)': {
            margin: `0px -${theme('spacing.3')}`,
          },
        },
        // Base Container
        '.container': {
          margin: '0 auto',
          maxWidth: '1280px',
          '@media (max-width: 1280px)': {
            maxWidth: '100%',
          },
        },
        // Link
        '.link': {
          transition: 'color 150ms',
          '&:hover': {
            color: theme('colors.primary.500'),
          },
        },
      })
    }),
  ],
}
export default config
