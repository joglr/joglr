import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import joinClasses from './../helpers/join-classes'
import Typography from 'material-ui/Typography'
import LocationIcon from '@material-ui/icons/LocationOn'
import DownIcon from '@material-ui/icons/KeyboardArrowDown'
import setColorOpacity from '../helpers/set-color-opacity'
import asyncComponent from './../helpers/asyncComponent'

const AsyncBackgroundParticles = asyncComponent(() => import('./BackgroundParticles.jsx'))
const AsyncAbout = asyncComponent(() => import('./About.jsx'))
const AsyncStyles = asyncComponent(() => import('./Styles.jsx'))

const absolute = {
  position: 'absolute'
}

const topBorderSize = 1

const styles = theme => ({
  root: {
    fontFamily: `'Roboto Mono', Consolas, monospace`
  },
  section: {
    minHeight: '100vh',
    '&:first-child': {
      backgroundColor: 'transparent',
      minHeight: `calc(100vh - ${topBorderSize * theme.spacing.unit}px)`
    },
    '&:not(:first-child)': {
      boxSizing: 'border-box',
      boxShadow: `0 0 ${theme.spacing.unit}px 0 black`,
      borderTop: `${topBorderSize * theme.spacing.unit}px ${theme.palette
        .secondary.main} solid`,
      backgroundColor: setColorOpacity(theme.palette.primary.main, 0.85)
    }
  },
  container: {
    maxWidth: '960px',
    margin: 'auto'
  },
  typographyWrapper: {
    padding: '1rem'
  },
  noUserSelect: {
    userSelect: 'none'
  },
  display4: {
    '@media (max-width: 960px)': {
      fontSize: 9 * theme.spacing.unit
    }
  },
  display3: {
    '@media (max-width: 960px)': {
      fontSize: 5 * theme.spacing.unit
    }
  },
  w100: {
    fontWeight: 100
  },
  w300: {
    fontWeight: 300
  },
  w400: {
    fontWeight: 400
  },
  w500: {
    fontWeight: 500
  },
  em: {
    fontStyle: 'italic'
  },
  link: {
    display: 'inline-block',
    verticalAlign: 'bottom',
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    // overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: `''`,
      display: 'block',
      width: '0',
      height: '100%',
      position: 'absolute',
      bottom: '0',
      left: '0',
      borderBottom: `2px currentColor solid`,
      transition: 'width .25s'
      // color: 'blue',
    },
    '&:hover:after': {
      width: '100%'
    }
  },
  textCentered: {
    textAlign: 'center'
  },
  textIcon: {
    fontSize: 'smaller',
    color: theme.palette.secondary.main
  },
  downIcon: {
    extend: 'textIcon',
    fontSize: '5rem',
    animation: 'hover 1s ease-in-out alternate infinite'
  },
  leftIcon: {
    // marginRight: '0.1em'
  },
  noWrap: {
    whiteSpace: 'nowrap'
  },
  centeredX: {
    ...absolute,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  centeredY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  centeredXY: {
    ...styles.centedX,
    ...styles.centedY,
    transform: 'translate(-50%, -50%)'
  },
  keepWhiteSpace: {
    whiteSpace: 'pre-wrap'
  },
  themePrimary: { backgroundColor: theme.palette.primary.main },
  themePrimaryContrast: { backgroundColor: theme.palette.primary.contrastText },
  themePrimaryText: { color: theme.palette.primary.main },
  themePrimaryContrastText: { color: theme.palette.primary.contrastText },
  themeSecondary: { backgroundColor: theme.palette.secondary.main },
  themeSecondaryContrast: {
    backgroundColor: theme.palette.secondary.contrastText
  },
  themeSecondaryText: { color: theme.palette.secondary.main },
  themeSecondaryContrastText: { color: theme.palette.secondary.contrastText }
})

const App = ({ classes, ReactGA }) => {
  return (
    <div className={classes.root}>
      <section
        className={joinClasses(
          classes.section,
          classes.firstSection,
          classes.centeredY,
          classes.themePrimaryContrastText
        )}>
        <div
          className={joinClasses(classes.typographyWrapper, classes.container)}>
          <Typography
            variant="display4"
            className={joinClasses(
              classes.themePrimaryContrastText,
              classes.noUserSelect,
              classes.w100,
              classes.display4
            )}>
            Hi, I'm Jonas
          </Typography>
          <Typography
            variant="display3"
            className={joinClasses(
              classes.themePrimaryContrastText,
              classes.noUserSelect,
              classes.w300,
              classes.display3
            )}>
            <p>
              I'm a self-taught web developer and creator based in{' '}
              <strong className={classes.w400}>
                <span className={classes.noWrap}>
                  <LocationIcon
                    className={joinClasses(classes.textIcon, classes.leftIcon)}
                  />Copenhagen
                </span>
                <span>, Denmark</span>
              </strong>
            </p>
          </Typography>
          <div className={classes.textCentered}>
            <div>
              <DownIcon className={classes.downIcon} />
            </div>
          </div>
        </div>
      </section>
      <AsyncAbout classes={classes} ReactGA={ReactGA} />
      <AsyncBackgroundParticles />
      <AsyncStyles />
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
