# React Native Template

A modern React Native monorepo template with Tamagui, Next.js, and Expo.

## What's Included

- 🏗️ **Monorepo setup** with Turbo and Yarn workspaces
- ⚛️ **React Native** with Expo and Next.js
- 🎨 **Tamagui** for cross-platform UI components
- 📱 **Universal apps** - one codebase for web, iOS, and Android
- 🔧 **TypeScript** throughout
- 📦 **Package structure** for shared logic and components
- 🎯 **Biome** for linting and formatting
- 🔨 **Conventional commits** with automated changelog

## Project Structure

```
├── apps/
│   ├── expo/          # React Native app with Expo
│   ├── next/          # Next.js web app
│   └── storybook/     # Component documentation
├── packages/
│   ├── ui/            # Shared UI components
│   ├── app/           # Shared app logic and screens
│   ├── api/           # API client and types
│   └── config/        # Tamagui configuration and theme
└── turbo.json         # Turbo build configuration
```

## Getting Started

1. **Install dependencies**
   ```bash
   yarn install
   ```

2. **Start the development servers**
   ```bash
   # Web development
   yarn web

   # Native development
   yarn native

   # All apps in watch mode
   yarn watch
   ```

3. **Build for production**
   ```bash
   yarn build
   ```

## Available Scripts

- `yarn native` - Start Expo development server
- `yarn web` - Start Next.js development server
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator
- `yarn build` - Build all packages
- `yarn test` - Run tests
- `yarn lint` - Check code quality

## Adding New Components

Use the built-in generators to create new components:

```bash
# Generate a new UI component
yarn turbo gen ui-component

# Generate a new screen
yarn turbo gen screen

# Generate a new API endpoint
yarn turbo gen api-route
```

## Customization

### Theme and Colors

Edit `packages/config/src/colors.ts` and `packages/config/src/themes.ts` to customize your app's theme.

### Fonts

Update `packages/config/src/fonts.ts` to change typography settings.

### API Configuration

Configure your API endpoints in `packages/api/src/client.ts`.

## Deployment

### Web (Next.js)

```bash
yarn web:prod
```

### Native (Expo)

```bash
# iOS
yarn native:prebuild
yarn ios

# Android
yarn android
```

## Architecture

This template follows a modular architecture:

- **Packages**: Shared code that can be used across apps
- **Apps**: Platform-specific applications
- **Workspaces**: Yarn workspaces for dependency management
- **Turbo**: Fast build system with caching

## Contributing

1. Follow conventional commit format
2. Use the provided linting configuration
3. Add tests for new features
4. Update documentation as needed

## License

MIT
