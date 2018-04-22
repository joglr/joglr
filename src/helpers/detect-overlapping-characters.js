const detectOverlappingCharacters = (one, two) => {
  const map = []
  const max = Math.max(one.length, two.length)
  for (let i = 0; i < max; i++) {
    if (one[i] === two[i] && one[i] !== ' ') map.push({
      position: i,
      character: one[i]
    })
  }
  if (Object.keys(map).length === 0) return false
  return map
}

export default detectOverlappingCharacters
