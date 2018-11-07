const setColorOpacity = (color, opacity) => {
  const values = color.match(/[a-zA-Z0-9]{2}/g).map(
    x => parseInt(x, 16)
  )
  return `rgba(${values.join(', ')}, ${opacity})`
}

export default setColorOpacity
