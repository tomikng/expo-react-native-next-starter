/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')
const { join } = require('node:path')

const boolVals = {
  true: true,
  false: false,
}

const disableExtraction =
  boolVals[process.env.DISABLE_EXTRACTION] ?? process.env.NODE_ENV === 'development'

const plugins = [
  withTamagui({
    config: '../../packages/config/src/tamagui.config.ts',
    components: ['tamagui', '@my/ui'],
    appDir: true,
    importsWhitelist: ['constants.js', 'colors.js'],
    outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    logTimings: true,
    disableExtraction,
    shouldExtract: (path) => {
      if (path.includes(join('packages', 'app'))) {
        return true
      }
    },
    disableThemesBundleOptimize: true,
    excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
  }),
  (nextConfig) => {
    return {
      webpack: (webpackConfig, options) => {
        webpackConfig.resolve.alias = {
          ...webpackConfig.resolve.alias,
          'react-native$': 'react-native-web',
          'react-native-svg': '@tamagui/react-native-svg',
          'react-native-reanimated/package.json': require.resolve(
            'react-native-reanimated/package.json'
          ),
          'react-native-reanimated': require.resolve('react-native-reanimated'),
          'react-native/Libraries/Image/AssetRegistry': false,
          'react-native-safe-area-context/src': 'react-native-safe-area-context/lib/commonjs',
          'expo-clipboard': false,
        }
        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(webpackConfig, options)
        }
        return webpackConfig
      },
    }
  },
]

module.exports = () => {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    modularizeImports: {
      '@tamagui/lucide-icons': {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
      'react-native-reanimated',
      'expo-router',
      '@expo/metro-runtime',
      'react-native',
      'expo',
      'react-native-safe-area-context',
      'app',
      '@my/ui',
      '@my/config',
    ],
    experimental: {
      scrollRestoration: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.co',
        },
      ],
    },
  }

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }

  return config
}
