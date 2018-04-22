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
  huge: {
    height: '100vh',
    position: 'relative',
    fontSize: '2rem',
    verticalAlign: 'middle',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  themePrimary: {
    backgroundColor: theme.palette.primary.main
  },
  themePrimaryContrast: {
    backgroundColor: theme.palette.primary.contrastText
  },
  themePrimaryText: {
    color: theme.palette.primary.main
  },
  themePrimaryContrastText: {
    color: theme.palette.primary.contrastText
  },
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
    zIndex: 9999
  },
  keepWhiteSpace: {
    whiteSpace: 'pre-wrap'
  }
})

const makeContainer = (firstText, secondText) => {
  let string = firstText
  const overlapMap = detectOverlappingCharacters(firstText, secondText)

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

const makeFiller = (first, second) => {
  const max = Math.max(first.length, second.length)
  let string = ' '.repeat(max)

  const overlapMap = detectOverlappingCharacters(first, second)

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

  const firstContainer = makeContainer(text1, text2)
  const secondContainer = makeContainer(text2, text1)
  const fixedFiller = makeFiller(text1, text2)
  return (
    <div className={classes.root}>

      <div className={classes.huge}>
        <div className={classes.centeredY}>
          <p className={classes.keepWhiteSpace}>{firstContainer}</p>
        </div>
        <div className={joinClasses(classes.centeredY, classes.fixed)}>
          <p className={classes.keepWhiteSpace}>{fixedFiller}</p>
        </div>
      </div>
      <div className={classes.huge}>
        <div className={classes.centeredY}>
          <p className={classes.keepWhiteSpace}>{secondContainer}</p>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
