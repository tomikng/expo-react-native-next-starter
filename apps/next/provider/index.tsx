'use client'

import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { config } from '@my/config'
import { NextThemeProvider, useThemeSetting } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import { useServerInsertedHTML } from 'next/navigation'
import type { ReactNode } from 'react'
import { StyleSheet } from 'react-native'

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  const themeSetting = useThemeSetting()
  useServerInsertedHTML(() => {
    // @ts-expect-error
    const rnwStyle = StyleSheet.getSheet()
    return (
      <>
        <link
          rel="stylesheet"
          href="/tamagui.css"
        />
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
        <style
          dangerouslySetInnerHTML={{
            // the first time this runs you'll get the full CSS including all themes
            // after that, it will only return CSS generated since the last call
            __html: config.getNewCSS(),
          }}
        />

        <style
          dangerouslySetInnerHTML={{
            __html: config.getCSS({
              exclude: process.env.NODE_ENV === 'production' ? 'design-system' : null,
            }),
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            // avoid flash of animated things on enter:
            __html: `document.documentElement.classList.add('t_unmounted')`,
          }}
        />
      </>
    )
  })

  return (
    <NextThemeProvider
      skipNextHead
      defaultTheme="light"
    >
      <Provider defaultTheme={themeSetting.resolvedTheme || 'light'}>{children}</Provider>
    </NextThemeProvider>
  )
}
