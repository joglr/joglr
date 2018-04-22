import detectOverlappingCharacters from './detect-overlapping-characters'
import jest2 from 'jest'

describe('detectOverlappingCharacters', () => {
  it('is a function', () => {
    expect(typeof detectOverlappingCharacters).toBe('function')
  })
  it('returns false if no overlap', () => {
    expect(detectOverlappingCharacters('one', 'two')).toBe(false)
  })
  it('returns truthy if overlap', () => {
    expect(!!detectOverlappingCharacters('one', 'orange')).toBe(true)
  })
  it('works', () => {
    expect(detectOverlappingCharacters('one', 'orange')[0]).toBe('o')
  })
  it('works more', () => {
    expect(detectOverlappingCharacters('abanana', 'orange')[2]).toBe('a')
  })
  it('works more', () => {
    expect(detectOverlappingCharacters('a space', 'i love')[2]).toBe(false)
  })
})
