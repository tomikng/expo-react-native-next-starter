import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined()
  })

  it('should have correct display name', () => {
    expect(Button.name).toBe('Button')
  })
})
