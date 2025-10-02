import { describe, expect, it } from 'vitest'
import { HomeScreen } from './screen'

describe('HomeScreen', () => {
  it('should be defined', () => {
    expect(HomeScreen).toBeDefined()
  })

  it('should be a function component', () => {
    expect(typeof HomeScreen).toBe('function')
  })
})
