module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<emoji>[^\w\s:]+?\s+)?(?<type>\w+)(?:\((?<scope>.*)\))?!?:\s(?<subject>.+)$/u,
      headerCorrespondence: ['emoji', 'type', 'scope', 'subject'],
    },
  },
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [
      2,
      'always',
      [
        // ===== PLATFORM SCOPES =====
        'web', // web-specific changes
        'mobile', // mobile-specific changes (both iOS & Android)
        'ios', // iOS-specific changes
        'android', // Android-specific changes
        'shared', // affects both web & mobile

        // ===== PACKAGE SCOPES =====
        'ui', // cross-platform UI components
        'app', // shared app logic
        'api', // backend/api changes
        'config', // configuration files
        'storybook', // storybook changes

        // ===== FEATURE SCOPES =====
        'auth', // authentication & authorization
        'navigation', // navigation & routing
        'forms', // form handling & validation
        'animations', // animations & transitions
        'accessibility', // accessibility improvements
        'performance', // performance optimizations
        'security', // security improvements

        // ===== INFRASTRUCTURE SCOPES =====
        'ci', // continuous integration
        'build', // build system
        'deps', // dependencies
        'release', // release process
        'test', // testing
        'lint', // linting & formatting
        'docs', // documentation

        // ===== NESTED SCOPES =====
        'web/auth',
        'web/navigation',
        'mobile/auth',
        'mobile/navigation',
        'ios/auth',
        'android/auth',
        'shared/auth',
        'shared/navigation',
        'shared/forms',
        'shared/animations',
        'ui/atoms', // atomic components
        'ui/molecules', // molecular components
        'ui/organisms', // organism components
        'ui/layout', // layout components
        'api/auth',
        'config/theme', // theme configuration
        'config/build', // build configuration
        'config/lint', // linting configuration
      ],
    ],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'init', // initial commit
        'feat', // new feature
        'fix', // bug fix
        'hotfix', // urgent bug fix
        'docs', // documentation
        'style', // formatting, missing semicolons, etc.
        'refactor', // code refactoring
        'perf', // performance improvements
        'test', // adding tests
        'build', // build system changes
        'ci', // CI/CD changes
        'chore', // maintenance tasks
        'revert', // revert changes
        'update', // dependency updates
        'security', // security improvements
      ],
    ],
  },
}
