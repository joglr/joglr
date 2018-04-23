import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import joinClasses from './../helpers/join-classes'
import detectOverlappingCharacters from './../helpers/detect-overlapping-characters'

const absolute = {
  position: 'absolute'
}

const fixed = {
  position: 'fixed'
}

const styles = theme => ({
  root: {
    fontFamily: `'Roboto Mono', Consolas, monospace`
  },
  primary: {
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  secondary: {
    padding: '1rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  fullHeight: {
    height: '100vh'
  },
  huge: {
    // position: 'relative',
    fontSize: '3rem'
  },
  themePrimary: { backgroundColor: theme.palette.primary.main },
  themePrimaryContrast: { backgroundColor: theme.palette.primary.contrastText },
  themePrimaryText: { color: theme.palette.primary.main },
  themePrimaryContrastText: { color: theme.palette.primary.contrastText },
  tText: {
    color: 'transparent'
  },
  centeredX: {
    ...absolute,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  centeredY: {
    ...absolute,
    top: '50%',
    transform: 'translateY(-50%)'
  },
  centeredXY: {
    ...styles.centedX,
    ...styles.centedY,
    transform: 'translate(-50%, -50%)'
  },
  fixed: {
    ...fixed,
    top: 0,
    zIndex: 9999
  },
  keepWhiteSpace: {
    whiteSpace: 'pre-wrap'
  }
})

const makeContainer = (text1, text2) => {
  let string = text1
  const overlapMap = detectOverlappingCharacters(text1, text2)

  if (overlapMap)
    for (const charObj of overlapMap) {
      const { position, character } = charObj

      const from =
        overlapMap.indexOf(charObj) === 0
          ? 0
          : overlapMap[overlapMap.indexOf(charObj) - 1].index

      string = `${string.slice(from, position)} ${string.slice(
        position + 1,
        string.length
      )}` //?
    }
  return string
}

const makeFiller = (text1, text2) => {
  const max = Math.max(text1.length, text2.length)
  let string = ' '.repeat(max)

  const overlapMap = detectOverlappingCharacters(text1, text2)

  if (overlapMap)
    for (const charObj of overlapMap) {
      const { position, character } = charObj

      const from =
        overlapMap.indexOf(charObj) === 0
          ? 0
          : overlapMap[overlapMap.indexOf(charObj) - 1].position

      const firstPart = string.slice(0, position)
      const secondPart = string.slice(position, max)
      string = `${firstPart}${character}${secondPart}`
      // ' '.repeat(position)//?
    }
  string
  return string
}

const App = ({ classes }) => {
  const text1 = `Hello. My name is Jonas`
  const text2 = `I make web applications`
  const text3 = `  using JavaScript`
  detectOverlappingCharacters(text3, text1) //?
  detectOverlappingCharacters(text3, text2) //?
  const container1 = makeContainer(text1, text2)
  const container2 = makeContainer(text2, text1)
  const container3 = makeContainer(text3, text2)
  const filler12 = makeFiller(text1, text2)
  const filler23 = makeFiller(text2, text3)
  return (
    <div
      className={joinClasses(
        classes.root,
        classes.fullHeight,
        classes.themePrimary,
        classes.themePrimaryContrastText
      )}>
      {[ container1, container2, container3 ].map((x, key) => (
        <div
          {...{ key }}
          className={joinClasses(classes.huge, classes.keepWhiteSpace)}>
          {x}
        </div>
      ))}
      <div
        className={joinClasses(
          classes.huge,
          classes.keepWhiteSpace,
          classes.fixed
        )}>
        {filler12}
      </div>
      <div className={classes.fullHeight} />
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
