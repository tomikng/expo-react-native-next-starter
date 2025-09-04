'use client'

import { config } from '@my/config'
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui'

export const Provider = ({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) => {
  return (
    <TamaguiProvider
      config={config}
      {...rest}
    >
      {children}
    </TamaguiProvider>
  )
}
