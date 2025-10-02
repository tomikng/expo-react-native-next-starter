import { describe, expect, it } from 'vitest'
import { metadata } from './layout'

describe('RootLayout metadata', () => {
  it('should have correct title', () => {
    expect(metadata.title).toBe('Template')
  })

  it('should have correct description', () => {
    expect(metadata.description).toBe('Template')
  })

  it('should have openGraph configuration', () => {
    expect(metadata.openGraph).toBeDefined()
    expect(metadata.openGraph?.title).toBe('Template')
    expect(metadata.openGraph?.description).toBe('Template')
    expect(metadata.openGraph?.images).toHaveLength(1)
  })

  it('should have correct OG image path', () => {
    expect(metadata.openGraph?.images?.[0]).toBe('/assets/og-image.jpg')
  })
})
