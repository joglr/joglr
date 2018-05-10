import setColorOpacity from './set-color-opacity'

describe('setColorOpacity', () => {
  it('applies opacity', () => {
    expect(setColorOpacity('#abcdef', 0.5)).toBe('rgba(171, 205, 239, 0.5)')
    expect(setColorOpacity('#f5f5f5', 0.5)).toBe('rgba(245, 245, 245, 0.5)')
  })
})