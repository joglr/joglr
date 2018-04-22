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
    fontSize: '9rem',
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
  }
})

const firstText = 'Whaaaaaa is this? I think you are crazy'
const secondText = 'My name is Jonas'

detectOverlappingCharacters(firstText, secondText) //?
const makeContainer = (firstText, secondText) => {
  let string = firstText
  const overlapMap = detectOverlappingCharacters(firstText, secondText)

  for (const charObj of overlapMap) {
    const { position, char } = charObj

    const from =
      overlapMap.indexOf(charObj) === 0
        ? 0
        : overlapMap[overlapMap.indexOf(charObj) - 1].index

    string = `${string.slice(from, position - 1)} ${string.slice(
      position + 1,
      string.length
    )}` //?
  }
  return string
}

const makeFiller = (firstText, secondText) => {
  let string = firstText
  const overlapMap = detectOverlappingCharacters(firstText, secondText)

  for (const charObj of overlapMap) {
    const { position, char } = charObj

    const from =
      overlapMap.indexOf(charObj) === 0
        ? 0
        : overlapMap[overlapMap.indexOf(charObj) - 1].position

    string = `${' '.repeat(from)}${char}${' '.repeat(position + 2)}` //?
  }
}

const App = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.huge}>
      <div className={classes.centeredY}>
        <p>
          {makeContainer(firstText, secondText)}
          // <span className={classes.tText}>.....</span>H<span className={classes.tText}>e</span>l<span className={classes.tText}>l</span>lll<span className={classes.tText}>o</span>!
        </p>
      </div>
      <div className={joinClasses(classes.centeredY, classes.fixed)}>
        {makeFiller(firstText, secondText)}
        // <span className={classes.tText}>.....</span>
        // <span className={classes.tText}>H</span>e<span className={classes.tText}>l</span>l<span className={classes.tText}>lll</span>o
      </div>
    </div>
    <div className={classes.huge}>
      <div className={classes.centeredY}>
        My nam<span className={classes.tText}>e</span>{' '}
        <span className={classes.tText}>i</span>s J<span className={classes.tText}>o</span>nas
      </div>
    </div>
  </div>
)

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
