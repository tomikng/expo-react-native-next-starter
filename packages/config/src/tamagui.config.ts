import { shorthands } from '@tamagui/shorthands'
import { createTamagui, createTokens, setupDev } from 'tamagui'
import { animations } from './animations'
import { colors } from './colors'
import { helveticaFont } from './fonts'
import { media } from './media'
import { themes } from './themes'

if (process.env.NODE_ENV !== 'production') {
  setupDev({
    visualizer: true,
  })
}

type ColorName = keyof typeof colors
type OpacityLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90
type ColorWithOpacity<T extends string> = `${T}-${OpacityLevel}`
type ColorShadeLevel = 25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
type ColorWithShade<T extends string> = `${T}-${ColorShadeLevel}`
type ColorWithShadeAndOpacity<T extends string> = `${T}-${ColorShadeLevel}-${OpacityLevel}`

export const PRESSED_OPACITY = 0.5
export { themes } from './themes'

// Redefine AllColorVariants to include all color variants in one type
type AllColorVariants = {
  [K in ColorName]: string
} & {
  [K in ColorName as ColorWithOpacity<K>]: string
} & {
  [K in keyof typeof colors as K extends 'white' | 'black' | 'transparent'
    ? never
    : ColorWithShade<K>]: string
} & {
  [K in keyof typeof colors as K extends 'white' | 'black' | 'transparent'
    ? never
    : ColorWithShadeAndOpacity<K>]: string
}

function colorWithOpacities<T extends ColorName>(
  colorName: T,
  hexColor: string | Record<number | string, string>
): { [P in T | ColorWithOpacity<T> | ColorWithShade<T> | ColorWithShadeAndOpacity<T>]: string } {
  const hexToRGBA = (hex: string, opacity: number): string => {
    const r = Number.parseInt(hex.slice(1, 3), 16)
    const g = Number.parseInt(hex?.slice(3, 5), 16)
    const b = Number.parseInt(hex?.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
  }

  const result = {} as {
    [P in T | ColorWithOpacity<T> | ColorWithShade<T> | ColorWithShadeAndOpacity<T>]: string
  }
  const opacityLevels: OpacityLevel[] = [10, 20, 30, 40, 50, 60, 70, 80, 90]

  if (typeof hexColor === 'string') {
    result[colorName] = hexColor
    opacityLevels.forEach((opacity) => {
      result[`${colorName}-${opacity}` as ColorWithOpacity<T>] = hexToRGBA(hexColor, opacity)
    })
  }
  // Handle color object with shades
  else if (typeof hexColor === 'object') {
    // Simply use all shades without default shade
    const typedHexColor = hexColor as Record<string, string>

    // For the base color (no shade), just use the first shade value
    const keys = Object.keys(typedHexColor)
    if (keys.length > 0) {
      // Make sure we have a valid first key
      const firstKey = keys[0]
      if (firstKey && firstKey in typedHexColor) {
        const baseColor = typedHexColor[firstKey]
        // Ensure baseColor is always a string to satisfy the type requirement
        result[colorName] = baseColor as string

        // Add opacity variants for the base color
        opacityLevels.forEach((opacity) => {
          // Check if baseColor is defined before using it
          if (baseColor) {
            result[`${colorName}-${opacity}` as ColorWithOpacity<T>] = hexToRGBA(baseColor, opacity)
          }
        })
      }
    }

    // Add all shade variants without calculating a default
    Object.entries(typedHexColor).forEach(([shade, value]) => {
      // Add the shade variant
      result[`${colorName}-${shade}` as ColorWithShade<T>] = value

      // Add opacity variants for each shade
      opacityLevels.forEach((opacity) => {
        result[`${colorName}-${shade}-${opacity}` as ColorWithShadeAndOpacity<T>] = hexToRGBA(
          value,
          opacity
        )
      })
    })
  }

  return result
}

function generateAllColorVariants(): AllColorVariants {
  let allVariants = {} as Partial<AllColorVariants>

  Object.entries(colors).forEach(([colorName, colorValue]) => {
    allVariants = {
      ...allVariants,
      ...colorWithOpacities(
        colorName as ColorName,
        colorValue as string | Record<number | string, string>
      ),
    }
  })

  return allVariants as AllColorVariants
}

const color = { ...generateAllColorVariants() } as const

export const config = createTamagui({
  shorthands,
  animations,
  themes,
  media,
  fonts: {
    body: helveticaFont,
    heading: helveticaFont,
  },
  tokens: createTokens({
    color,
    radius: {
      true: 0,
      'radius-xxs': 2,
      'radius-xs': 4,
      'radius-sm': 6,
      'radius-md': 8,
      'radius-lg': 10,
      'radius-xl': 12,
      'radius-2xl': 16,
      'radius-3xl': 20,
      'radius-4xl': 24,
      'radius-5xl': 32,
      'radius-full': 9999,
    },
    zIndex: {
      true: 0,
      header: 100,
      backgroundImage: 10,
      content: 20,
    },
    space: {
      true: 0,
      'spacing-xxs': 2,
      'spacing-xs': 4,
      'spacing-sm': 6,
      'spacing-md': 8,
      'spacing-lg': 12,
      'body-top-padding-sm': 12,
      'spacing-xl': 16,
      'spacing-2xl': 20,
      'spacing-3xl': 24,
      'body-spacing': 24,
      'body-horizontal-padding': 24,
      'spacing-4xl': 32,
      'spacing-5xl': 40,
      'spacing-6xl': 48,
      'spacing-7xl': 64,
      'spacing-8xl': 80,
      'spacing-9xl': 96,
      'spacing-10xl': 128,
      'spacing-11xl': 160,
      'spacing-full': 9999,
    },
    fontSize: helveticaFont.size,
    lineHeight: helveticaFont.lineHeight,
    letterSpacing: helveticaFont.letterSpacing,
    size: {
      ...helveticaFont.size,
      true: 0,
    },
    fontWeight: {
      ...helveticaFont.fontWeight,
      true: 0,
    },
  }),
  settings: {
    allowedStyleValues: 'somewhat-strict-web',
    autocompleteSpecificTokens: 'except-special',
    shouldAddPrefersColorThemes: true,
    onlyAllowShorthands: false,
    themeClassNameOnRoot: true,
  },
})
