'use client'

import { config } from '@my/config'
import { NextThemeProvider } from '@tamagui/next-theme'
import { TamaguiProvider } from 'tamagui'

export const NextTamaguiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider>
      <TamaguiProvider
        config={config}
        defaultTheme="light"
      >
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  )
}
