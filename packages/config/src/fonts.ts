import { createFont } from 'tamagui'

export const helveticaFont = createFont({
  family:
    '"Helvetica Neue", Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  size: {
    true: 12,
    'text-xs': 12,
    'text-sm': 14,
    'text-md': 16,
    'text-lg': 18,
    'text-xl': 20,
    'display-xs': 24,
    'display-sm': 32,
    'display-md': 40,
    'display-lg': 48,
    'display-xl': 60,
    'display-2xl': 72,
  },
  lineHeight: {
    true: 18,
    'text-xs': 18,
    'text-sm': 20,
    'text-md': 24,
    'text-lg': 28,
    'text-xl': 30,
    'display-xs': 32,
    'display-sm': 38,
    'display-md': 44,
    'display-lg': 60,
    'display-xl': 72,
    'display-2xl': 90,
  },
  letterSpacing: {
    true: 0,
    'text-xs': 0,
    'text-sm': 0,
    'text-md': 0,
    'text-lg': 0,
    'text-xl': 0,
    'display-xs': 0,
    'display-sm': 0,
    'display-md': -0.8,
    'display-lg': 0,
    'display-xl': 0,
    'display-2xl': 0,
  },
  fontWeight: {
    select: '500',
    true: 400,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700,
    '800': 800,
    '900': 900,
  },
  weight: {
    true: 400,
    '100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700,
    '800': 800,
    '900': 900,
  },
  face: {
    '100': {
      normal: 'HelveticaNeue-Thin',
    },
    '200': {
      normal: 'HelveticaNeue-UltraLight',
    },
    '300': {
      normal: 'HelveticaNeue-Light',
    },
    '400': {
      normal: 'HelveticaNeue',
    },
    '500': {
      normal: 'HelveticaNeue-Medium',
    },
    '600': {
      normal: 'HelveticaNeue-Bold',
    },
    '700': {
      normal: 'HelveticaNeue-Bold',
    },
    '800': {
      normal: 'HelveticaNeue-Heavy',
    },
    '900': {
      normal: 'HelveticaNeue-Black',
    },
  },
})
