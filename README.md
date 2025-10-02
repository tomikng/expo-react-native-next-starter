# React Native Template

A modern React Native monorepo template with Next.js and Expo.

## What's Included

- 🏗️ **Monorepo setup** with Turbo and Yarn workspaces
- ⚛️ **React Native** with Expo and Next.js
- 📱 **Universal apps** - one codebase for web, iOS, and Android
- 🎨 **React Native core components** with custom styling
- 🔧 **TypeScript** throughout
- 📦 **Package structure** for shared logic and components
- 🎯 **Biome** for linting and formatting
- 🧪 **Vitest** for fast unit testing
- 🔨 **Conventional commits** with automated changelog
- 🚀 **Corepack** for consistent package manager versioning

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
│   └── config/        # Shared configuration and theme
└── turbo.json         # Turbo build configuration
```

## Getting Started

1. **Enable Corepack** (if not already enabled)
   ```bash
   corepack enable
   ```
   This ensures you're using the correct Yarn version (4.5.0) specified in `package.json`.

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development servers**
   ```bash
   # Web development
   yarn web

   # Native development
   yarn native

   # All apps in watch mode
   yarn watch
   ```

4. **Build for production**
   ```bash
   yarn build
   ```

## Available Scripts

- `yarn native` - Start Expo development server
- `yarn web` - Start Next.js development server
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator
- `yarn build` - Build all packages
- `yarn test` - Run all tests with Vitest
- `yarn test:watch` - Run tests in watch mode
- `yarn lint` - Check code quality

## Testing

This template uses [Vitest](https://vitest.dev/) for unit testing. Tests are located alongside the source files with a `.test.ts` or `.test.tsx` extension.

**Running Tests:**
```bash
# Run all tests
yarn test

# Run tests in watch mode (for development)
yarn test:watch
```

**Example Test Files:**
- `apps/next/lib/utils.test.ts` - Utility function tests
- `apps/next/app/layout.test.tsx` - Metadata tests
- `packages/ui/src/Button.test.tsx` - Component tests
- `packages/app/features/home/screen.test.tsx` - Screen component tests

## Customization

### Theme and Colors

Edit `packages/config/src/index.ts` to customize your app's colors, spacing, and border radius values.

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
