import { describe, it, expect } from 'vitest'
import HomePage from './page'

describe('HomePage', () => {
  it('should be defined', () => {
    expect(HomePage).toBeDefined()
  })

  it('should be a function component', () => {
    expect(typeof HomePage).toBe('function')
  })
})
