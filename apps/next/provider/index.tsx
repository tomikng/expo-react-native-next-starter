'use client'

import { Provider } from 'app/provider'
import { useServerInsertedHTML } from 'next/navigation'
import type { ReactNode } from 'react'
import { StyleSheet } from 'react-native'

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  useServerInsertedHTML(() => {
    // @ts-expect-error - React Native Web StyleSheet type
    const rnwStyle = StyleSheet.getSheet()
    return (
      <style
        dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
        id={rnwStyle.id}
      />
    )
  })

  return <Provider>{children}</Provider>
}
