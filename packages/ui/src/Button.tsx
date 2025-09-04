import { Button as TamaguiButton, type ButtonProps } from 'tamagui'

export type CustomButtonProps = Omit<ButtonProps, 'variant'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export const Button = ({ variant = 'primary', ...props }: CustomButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: '$bg-brand-solid',
          color: '$text-primary-on-brand',
          borderColor: '$border-brand',
          hoverStyle: {
            backgroundColor: '$bg-brand-solid_hover',
          },
        }
      case 'secondary':
        return {
          backgroundColor: '$bg-secondary',
          color: '$text-primary',
          borderColor: '$border-primary',
          hoverStyle: {
            backgroundColor: '$bg-secondary_hover',
          },
        }
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: '$text-primary',
          borderColor: 'transparent',
          hoverStyle: {
            backgroundColor: '$bg-secondary_hover',
          },
        }
      default:
        return {}
    }
  }

  return (
    <TamaguiButton
      size="$4"
      fontWeight="$6"
      borderRadius="$radius-md"
      {...getVariantStyles()}
      {...props}
    />
  )
}
