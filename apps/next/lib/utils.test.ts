import { describe, expect, it } from 'vitest'
import { formatDate, isValidEmail, truncate } from './utils'

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-15')
    const formatted = formatDate(date)
    expect(formatted).toContain('January')
    expect(formatted).toContain('2024')
  })
})

describe('truncate', () => {
  it('should not truncate strings shorter than length', () => {
    expect(truncate('Hello', 10)).toBe('Hello')
  })

  it('should truncate long strings', () => {
    expect(truncate('Hello World', 5)).toBe('Hello...')
  })

  it('should handle exact length', () => {
    expect(truncate('Hello', 5)).toBe('Hello')
  })
})

describe('isValidEmail', () => {
  it('should validate correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
  })

  it('should reject invalid email addresses', () => {
    expect(isValidEmail('invalid')).toBe(false)
    expect(isValidEmail('invalid@')).toBe(false)
    expect(isValidEmail('@domain.com')).toBe(false)
    expect(isValidEmail('no spaces@domain.com')).toBe(false)
  })
})
