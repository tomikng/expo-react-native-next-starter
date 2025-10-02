// Learn more: https://docs.expo.dev/guides/monorepos/
// Learn more about Metro: https://metrobundler.dev/docs/configuration
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

// Find the project and workspace directories
const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '../..')

// Get the default Expo Metro config
const config = getDefaultConfig(projectRoot)

// 1. Watch all files within the monorepo (merge with default watchFolders)
config.watchFolders = [...(config.watchFolders || []), workspaceRoot]

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

// 3. Add additional source extensions for better cross-platform support
if (!config.resolver.sourceExts.includes('mjs')) {
  config.resolver.sourceExts.push('mjs')
}
if (!config.resolver.sourceExts.includes('cjs')) {
  config.resolver.sourceExts.push('cjs')
}

module.exports = config
