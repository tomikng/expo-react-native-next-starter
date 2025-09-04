import type { ExpoConfig } from 'expo/config'

const pkg = require('../../package.json') as { version: string }

const ENVIRONMENTS = {
  development: {
    name: 'React Native Template Dev',
    scheme: 'reactnativetemplate-dev',
  },
  production: {
    name: 'React Native Template',
    scheme: 'reactnativetemplate',
  },
}

const environment = (process.env.APP_ENV as keyof typeof ENVIRONMENTS) || 'development'
const { name, scheme } = ENVIRONMENTS[environment]

const packageIdentifier = `com.template.${scheme.replace('-', '')}`

const config: ExpoConfig = {
  version: pkg.version,
  name,
  slug: 'react-native-template',
  jsEngine: 'hermes',
  scheme,
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash-light.png',
    backgroundColor: '#ffffff',
    dark: {
      image: './assets/splash-dark.png',
      backgroundColor: '#000000',
    },
    imageWidth: 200,
  },
  newArchEnabled: true,
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: packageIdentifier,
  },
  android: {
    softwareKeyboardLayoutMode: 'pan',
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#ffffff',
    },
    package: packageIdentifier,
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: ['expo-router', 'expo-font'],
  extra: {
    router: {
      origin: false,
    },
  },
}

export default config
