const getElPosition = (e, el) => {
  const { top, left } = el.getBoundingClientRect()
  return [ e.clientX - left, e.clientY - top ]
}

export default getElPosition
