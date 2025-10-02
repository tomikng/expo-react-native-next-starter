import { describe, it, expect } from 'vitest'
import { HomeScreen } from './screen'

describe('HomeScreen', () => {
  it('should be defined', () => {
    expect(HomeScreen).toBeDefined()
  })

  it('should be a function component', () => {
    expect(typeof HomeScreen).toBe('function')
  })
})
