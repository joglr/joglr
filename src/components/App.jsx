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

const App = ({ classes }) => {
  const text1 = `Hi, I'm Jonas. I make web applications, `
  const text2 = ``
  const text3 = <span>using <strong>modern</strong> web technologies.</span>
  return (
    <div
      className={joinClasses(
        classes.root,
        classes.fullHeight,
        classes.themePrimary,
        classes.themePrimaryContrastText,
      )}>
      {[ text1, text2, text3 ].map((x, key) => (
        <div
          {...{ key }}
          className={joinClasses(classes.huge, classes.keepWhiteSpace)}>
          {x}
        </div>
      ))}
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
