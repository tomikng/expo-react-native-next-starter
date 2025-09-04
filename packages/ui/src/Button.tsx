import { type ButtonProps, Button as TamaguiButton } from 'tamagui'

export type CustomButtonProps = Omit<ButtonProps, 'variant'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export const Button = ({ variant = 'primary', ...props }: CustomButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '$color12',
          color: '$background',
          borderWidth: 0,
          hoverStyle: {
            backgroundColor: '$color11',
          },
          pressStyle: {
            backgroundColor: '$color10',
          },
        }
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: '$color12',
          borderWidth: 1,
          borderColor: '$color8',
          hoverStyle: {
            backgroundColor: '$color3',
            borderColor: '$color10',
          },
          pressStyle: {
            backgroundColor: '$color4',
          },
        }
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: '$color11',
          borderColor: 'transparent',
          hoverStyle: {
            backgroundColor: '$color4',
          },
          pressStyle: {
            backgroundColor: '$color5',
          },
        }
      default:
        return {}
    }
  }

  return (
    <TamaguiButton
      fontWeight="600"
      borderRadius="$6"
      paddingHorizontal="$6"
      paddingVertical="$3"
      fontSize="$4"
      minWidth={120}
      {...getVariantStyles()}
      {...props}
    />
  )
}
