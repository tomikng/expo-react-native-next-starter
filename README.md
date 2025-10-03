<div align="center">

# 🚀 React Native + Next.js Monorepo Starter

A modern, production-ready monorepo template for building universal apps with React Native, Expo, and Next.js.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)
[![React Native](https://img.shields.io/badge/React_Native-0.79-20232a.svg)](https://reactnative.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-000000.svg)](https://nextjs.org/)
[![Expo](https://img.shields.io/badge/Expo-~53.0-000020.svg)](https://expo.dev/)

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Scripts](#-available-scripts) • [Architecture](#-architecture)

</div>

---

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [📂 Project Structure](#-project-structure)
- [🔧 Available Scripts](#-available-scripts)
- [📚 Documentation](#-documentation)
  - [Development](#development)
  - [Testing](#testing)
  - [Code Quality](#code-quality)
  - [React Compiler](#react-compiler)
  - [Customization](#customization)
  - [Deployment](#deployment)
- [🏗️ Architecture](#-architecture)
- [🧪 CI/CD Pipeline](#-cicd-pipeline)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ or 22 (LTS recommended) ([Download](https://nodejs.org/))
- **Corepack** enabled (included with Node.js 16.9+)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd expo-react-native-next-starter
   ```

2. **Enable Corepack** (if not already enabled)
   ```bash
   corepack enable
   ```
   This ensures you're using the correct Yarn version (4.5.0) specified in `package.json`.

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Start developing!**

   ```bash
   # Start all apps in watch mode
   yarn watch
   
   # OR start individually:
   
   # Web development (Next.js)
   yarn web
   
   # Mobile development (Expo)
   yarn native
   
   # Storybook
   yarn storybook
   ```

5. **Open the apps**
   - **Web**: http://localhost:3000
   - **Native**: Scan QR code with Expo Go app
   - **Storybook**: http://localhost:6006

---

## 📂 Project Structure

```text
.
├── apps/
│   ├── expo/              # 📱 React Native mobile app
│   │   ├── app/           # Expo Router screens
│   │   ├── babel.config.js
│   │   └── package.json
│   ├── next/              # 🌐 Next.js web application
│   │   ├── app/           # App Router pages
│   │   ├── next.config.js
│   │   └── package.json
│   └── storybook/         # 📚 Component documentation
│       ├── stories/
│       └── package.json
├── packages/
│   ├── ui/                # 🎨 Shared UI components
│   │   └── src/
│   ├── app/               # 📦 Shared app logic and screens
│   │   ├── features/      # Feature-based organization
│   │   └── provider/      # Context providers
│   ├── api/               # 🔌 API client and types
│   │   └── src/
│   └── config/            # ⚙️ Shared configuration
│       └── src/           # Theme, colors, constants
├── .github/
│   └── workflows/         # CI/CD pipelines
├── biome.json             # Linting & formatting config
├── turbo.json             # Turbo build configuration
├── package.json           # Root workspace config
└── tsconfig.base.json     # Base TypeScript config
```

### Package Overview

| Package | Description | Used By |
|---------|-------------|---------|
| `@my/ui` | Reusable UI components (Button, Text, etc.) | All apps |
| `app` | Shared screens, features, and navigation logic | Expo, Next.js |
| `@my/api` | API client, types, and data fetching | All apps |
| `@my/config` | Theme, colors, spacing, constants | All packages |

---

## 🔧 Available Scripts

### Development

| Command | Description |
|---------|-------------|
| `yarn native` | Start Expo development server |
| `yarn native:prebuild` | Generate native iOS/Android projects |
| `yarn ios` | Run on iOS simulator |
| `yarn android` | Run on Android emulator |
| `yarn web` | Build packages and start Next.js dev server |
| `yarn web:prod` | Build Next.js for production |
| `yarn web:prod:serve` | Serve production build locally |
| `yarn storybook` | Start Storybook development server |
| `yarn watch` | Start all apps in watch mode (parallel) |

### Quality Checks

| Command | Description |
|---------|-------------|
| `yarn typecheck` | Run TypeScript type checking across all workspaces |
| `yarn test` | Run all tests with Vitest |
| `yarn test:watch` | Run tests in watch mode for development |
| `yarn lint` | Check code quality with Biome |
| `yarn lint:fix` | Auto-fix linting and formatting issues |

### Build & Maintenance

| Command | Description |
|---------|-------------|
| `yarn build` | Build all packages (excludes Next.js app) |
| `yarn clean` | Remove all node_modules and reinstall |
| `yarn lint-sherif` | Check workspace dependency consistency |

---

## 📚 Documentation

### Development

#### Creating New Components

1. **Add component to `packages/ui/src/`**
   ```tsx
   // packages/ui/src/MyButton.tsx
   import { Pressable, Text } from 'react-native'
   
   export function MyButton({ title, onPress }) {
     return (
       <Pressable onPress={onPress}>
         <Text>{title}</Text>
       </Pressable>
     )
   }
   ```

2. **Export from `packages/ui/src/index.tsx`**
   ```tsx
   export * from './MyButton'
   ```

3. **Use in any app**
   ```tsx
   import { MyButton } from '@my/ui'
   ```

#### Creating New Screens

1. **Add screen to `packages/app/features/`**
   ```tsx
   // packages/app/features/profile/screen.tsx
   export function ProfileScreen() {
     return (
       <View>
         <Text>Profile Screen</Text>
       </View>
     )
   }
   ```

2. **Add to Expo Router**
   ```tsx
   // apps/expo/app/profile.tsx
   import { ProfileScreen } from 'app/features/profile/screen'
   export default ProfileScreen
   ```

3. **Add to Next.js**
   ```tsx
   // apps/next/app/profile/page.tsx
   import { ProfileScreen } from 'app/features/profile/screen'
   export default function ProfilePage() {
     return <ProfileScreen />
   }
   ```

### Testing

This template uses [Vitest](https://vitest.dev/) for fast unit testing with a Jest-compatible API.

#### Running Tests

```bash
# Run all tests once
yarn test

# Run tests in watch mode (for development)
yarn test:watch

# Run tests in a specific workspace
cd packages/ui && yarn test
```

#### Writing Tests

Tests are co-located with source files using `.test.ts` or `.test.tsx` extensions:

```tsx
// packages/ui/src/Button.test.tsx
import { render, fireEvent } from '@testing-library/react-native'
import { Button } from './Button'

describe('Button', () => {
  it('calls onPress when pressed', () => {
    const onPress = vi.fn()
    const { getByText } = render(
      <Button title="Click me" onPress={onPress} />
    )
    
    fireEvent.press(getByText('Click me'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})
```

#### Example Test Files

- `apps/next/lib/utils.test.ts` - Utility function tests
- `apps/next/app/layout.test.tsx` - Metadata tests
- `packages/ui/src/Button.test.tsx` - Component tests
- `packages/app/features/home/screen.test.tsx` - Screen component tests

### Code Quality

This template maintains high code quality through automated checks.

#### Type Checking

TypeScript type safety is enforced across all workspaces without suppressing errors.

```bash
# Type check all workspaces
yarn typecheck

# Type check a specific workspace
cd apps/next && yarn typecheck
```

**Configuration:**
- Type checking is enabled in all workspaces
- Test files are excluded from builds but still type-checked
- The Next.js build will fail on TypeScript errors

#### Linting & Formatting

This template uses [Biome](https://biomejs.dev/) - a fast, all-in-one toolchain that replaces ESLint and Prettier.

```bash
# Check for issues
yarn lint

# Auto-fix issues
yarn lint:fix
```

**Pre-commit Hooks:**
- Automatically formats and lints staged files
- Runs via Husky + lint-staged
- Ensures code quality before commits

### React Compiler

This template includes the **React Compiler** (formerly React Forget) - an experimental feature that automatically optimizes your React components.

#### What is React Compiler?

The React Compiler automatically memoizes components and values, eliminating the need for manual optimization with `useMemo`, `useCallback`, and `memo`. It analyzes your code at build time and adds optimizations automatically.

#### Benefits

✅ **Automatic Memoization** - No more manual `useMemo`/`useCallback`  
✅ **Better Performance** - Fewer re-renders out of the box  
✅ **Cleaner Code** - Write idiomatic React without optimization clutter  
✅ **Type-Safe** - Works seamlessly with TypeScript  

#### Configuration

React Compiler is already configured for both apps:

**Expo (Babel):**
```js
// apps/expo/babel.config.js
plugins: [
  ['babel-plugin-react-compiler', {
    target: '18' // React Native compatibility
  }],
]
```

**Next.js:**
```js
// apps/next/next.config.js
experimental: {
  reactCompiler: true
}
```

#### Usage

Just write normal React code - the compiler handles optimization:

```tsx
// ✅ Before: Manual optimization
const MemoizedComponent = memo(function MyComponent({ data }) {
  const processed = useMemo(() => processData(data), [data])
  const handleClick = useCallback(() => {
    console.log(processed)
  }, [processed])
  
  return <Button onPress={handleClick} />
})

// ✅ After: Let the compiler handle it
function MyComponent({ data }) {
  const processed = processData(data)
  const handleClick = () => {
    console.log(processed)
  }
  
  return <Button onPress={handleClick} />
}
```

#### Learn More

- [React Compiler Documentation](https://react.dev/learn/react-compiler)
- [Babel Plugin](https://www.npmjs.com/package/babel-plugin-react-compiler)

### Customization

#### Theme and Colors

Edit the shared configuration in `packages/config/src/index.ts`:

```typescript
export const theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    text: '#000000',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    full: 9999,
  },
}
```

#### API Configuration

Configure API endpoints in `packages/api/src/client.ts`:

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com'

export const apiClient = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`)
    return response.json()
  },
  // ... other methods
}
```

#### Environment Variables

Create `.env.local` files in each app:

```bash
# apps/next/.env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_APP_NAME=My App

# apps/expo/.env.local (using expo-constants)
EXPO_PUBLIC_API_URL=https://api.example.com
```

### Deployment

#### Web (Next.js)

**Vercel (Recommended):**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Build for Production:**
```bash
yarn web:prod
```

The build output will be in `apps/next/.next/`.

**Environment Variables:**
Set environment variables in your hosting platform's dashboard or `.env.production`.

#### Mobile (Expo)

**Development Build:**
```bash
# Generate native projects
yarn native:prebuild

# iOS
yarn ios

# Android
yarn android
```

**Production Build with EAS:**
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
cd apps/expo
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

**Learn more:**
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Expo EAS Build](https://docs.expo.dev/build/introduction/)

---

## 🏗️ Architecture

### Monorepo Structure

This template uses **Yarn Workspaces** + **Turbo** for efficient monorepo management:

```text
Root (yarn workspace)
├── apps/*          # Platform-specific applications
│   ├── expo        # React Native mobile
│   ├── next        # Next.js web
│   └── storybook   # Component docs
└── packages/*      # Shared code
    ├── ui          # UI components
    ├── app         # App logic
    ├── api         # API client
    └── config      # Configuration
```

### Package Dependencies

```
┌─────────────────────────────────────────┐
│  Apps (Platform-Specific Entry Points) │
└─────────────────────────────────────────┘
              │
              ├──> apps/expo (React Native)
              ├──> apps/next (Next.js)
              └──> apps/storybook
              
              │
              ▼
┌─────────────────────────────────────────┐
│         Shared Packages                 │
└─────────────────────────────────────────┘
              │
              ├──> app (screens & features)
              ├──> @my/ui (components)
              ├──> @my/api (data layer)
              └──> @my/config (theme)
```

### Design Principles

1. **Universal First**: Write once, run everywhere
2. **Type Safety**: TypeScript everywhere
3. **Modular**: Small, focused packages
4. **Fast Builds**: Turbo caching + parallel execution
5. **Developer Experience**: Fast feedback loops

### Build System

**Turbo** orchestrates builds with intelligent caching:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "typecheck": {
      "dependsOn": ["^build"]
    }
  }
}
```

Benefits:
- ✅ Builds packages in correct order
- ✅ Caches unchanged packages
- ✅ Runs tasks in parallel
- ✅ Incremental builds

---

## 🧪 CI/CD Pipeline

The GitHub Actions CI pipeline is optimized for speed with parallel execution:

```
┌──────────────────────────────────────────────┐
│  Stage 1: Quality Checks (Parallel)          │
├──────────────────┬───────────────────────────┤
│  Lint            │  Type Check               │
│  • Biome         │  • All packages           │
│  • Format check  │  • Next.js app            │
│                  │  • Expo app               │
└──────────────────┴───────────────────────────┘
            │                │
            └────────┬───────┘
                     ▼
         ┌────────────────────┐
         │   Both must pass   │
         └────────────────────┘
                     │
         ┌───────────┴──────────┐
         ▼                      ▼
┌──────────────────┐  ┌──────────────────┐
│  Build           │  │  Test            │
│  • Packages      │  │  • Vitest        │
│  • Next.js       │  │  • All tests     │
│  • Expo check    │  │                  │
└──────────────────┘  └──────────────────┘
```

### Pipeline Benefits

✅ **Fast Feedback** - Quality checks run first and fail fast  
✅ **Efficient** - Build and test run in parallel  
✅ **Cached** - Dependencies and build artifacts are cached  
✅ **Reliable** - Consistent across all environments  

### Running CI Locally

```bash
# Run all quality checks
yarn lint && yarn typecheck

# Run tests
yarn test

# Run full build
yarn build && yarn web:prod
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: <type>(<scope>): <description>

feat(ui): add new Button variant
fix(api): handle network errors properly
docs: update installation instructions
chore(deps): upgrade React to 19.0
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

### Development Workflow

1. **Fork & clone** the repository
2. **Create a branch**: `git checkout -b feature/my-feature`
3. **Make changes** with conventional commits
4. **Run quality checks**: `yarn lint && yarn typecheck && yarn test`
5. **Push & create** a pull request

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Write tests for new features
- Update documentation as needed
- Biome handles formatting automatically

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ using React Native, Expo, and Next.js**

[⬆ Back to Top](#-react-native--nextjs-monorepo-starter)

</div>
