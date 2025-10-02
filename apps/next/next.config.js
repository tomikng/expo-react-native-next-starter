/** @type {import('next').NextConfig} */

module.exports = {
  transpilePackages: [
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
        hostname: 'placehold.co', // TODO: replace this with your image host or remove it if you don't use images
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      'react-native$': 'react-native-web',
      'react-native-reanimated/package.json': require.resolve(
        'react-native-reanimated/package.json'
      ),
      'react-native-reanimated': require.resolve('react-native-reanimated'),
      'react-native/Libraries/Image/AssetRegistry': false,
      'react-native-safe-area-context/src': 'react-native-safe-area-context/lib/commonjs',
      'expo-clipboard': false,
    }
    return webpackConfig
  },
}
