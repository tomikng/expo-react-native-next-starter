import { Pressable, Text, StyleSheet, type PressableProps } from 'react-native'

export type CustomButtonProps = Omit<PressableProps, 'style'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  children?: React.ReactNode
}

export const Button = ({ variant = 'primary', children, ...props }: CustomButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          container: styles.primaryContainer,
          text: styles.primaryText,
        }
      case 'secondary':
        return {
          container: styles.secondaryContainer,
          text: styles.secondaryText,
        }
      case 'ghost':
        return {
          container: styles.ghostContainer,
          text: styles.ghostText,
        }
      default:
        return {
          container: styles.primaryContainer,
          text: styles.primaryText,
        }
    }
  }

  const variantStyles = getVariantStyles()

  return (
    <Pressable
      style={({ pressed }) => [
        styles.baseContainer,
        variantStyles.container,
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <Text style={[styles.baseText, variantStyles.text]}>
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  baseContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryContainer: {
    backgroundColor: '#007AFF',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryText: {
    color: '#007AFF',
  },
  ghostContainer: {
    backgroundColor: 'transparent',
  },
  ghostText: {
    color: '#007AFF',
  },
  pressed: {
    opacity: 0.7,
  },
})
