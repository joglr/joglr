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
    expect(detectOverlappingCharacters('one', 'orange')[0].character).toBe('o')
  })
  it('works more', () => {
    expect(detectOverlappingCharacters('abanana', 'orange')[0].character).toBe('a')
    expect(detectOverlappingCharacters('abanana', 'orange')[1].character).toBe('n')
  })
  it('works still', () => {
    expect(detectOverlappingCharacters('a space', 'i love')).toBe(false)
  })
})
