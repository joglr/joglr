import { Tooltip, Typography, withStyles, Fab } from '@material-ui/core'
import DownIcon from '@material-ui/icons/KeyboardArrowDownSharp'
import LocationIcon from '@material-ui/icons/LocationOnSharp'
import PropTypes from 'prop-types'
import React from 'react'
// @ts-ignore
import pkg from './../../package.json'
import joinClasses from './../helpers/join-classes'
import setColorOpacity from './../helpers/set-color-opacity'

import About from './About'

import 'typeface-roboto'
import asyncComponent from '../helpers/async-component'
const BackgroundParticles = asyncComponent(() =>
  import('./BackgroundParticles')
)

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
      minHeight: `calc(100vh - ${theme.spacing(topBorderSize)}px)`
    },
    '&:not(:first-child)': {
      boxSizing: 'border-box',
      boxShadow: `${theme.spacing(0, 0, 1, 0)} black`,
      borderTop: `${theme.spacing(topBorderSize)}px ${
        theme.palette.secondary.main
      } solid`,
      backgroundColor: setColorOpacity(theme.palette.primary.main, 0.85)
    }
  },
  paragraph: {
    margin: '0.5em 0 0.5em',
    lineHeight: '150%'
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
  h1: {
    fontSize: theme.spacing(14),
    color: 'inherit',
    '@media (max-width: 960px)': {
      fontSize: theme.spacing(9)
    }
  },
  h2: {
    fontSize: theme.spacing(7),
    color: 'inherit',
    '@media (max-width: 960px)': {
      fontSize: theme.spacing(4)
    }
  },
  w100: { fontWeight: 100 },
  w300: { fontWeight: 300 },
  w400: { fontWeight: 400 },
  w500: { fontWeight: 500 },
  textLink: {
    display: 'inline-block',
    verticalAlign: 'bottom',
    textDecoration: 'none',
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
      borderBottom: `0.04em currentColor solid`,
      transition: 'width .15s cubic-bezier(.5,0,0,1)'
    },
    '&:hover:after': {
      width: '100%'
    }
  },
  textCentered: {
    textAlign: 'center'
  },
  textIcon: {
    color: theme.palette.secondary.main,
    fontSize: '90%',
    verticalAlign: 'baseline'
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
            variant="h1"
            className={joinClasses(
              classes.themePrimaryContrastText,
              classes.noUserSelect,
              classes.w100,
              classes.h1
            )}>
            Hi.
          </Typography>
          <Typography
            variant="h2"
            className={joinClasses(
              classes.themePrimaryContrastText,
              classes.noUserSelect,
              classes.w300,
              classes.h2
            )}>
            <p>
              I'm{' '}
              <span className={classes.w400}>
                <Tooltip title="Jonas Glerup Røssum" placement="top">
                  <span>
                    Jona<span onClick={() => console.log(pkg.version)}>s</span>
                  </span>
                </Tooltip>
              </span>
              , a self-taught web application developer based in{' '}
              <strong className={classes.w400}>
                <span className={classes.noWrap}>
                  <LocationIcon
                    className={joinClasses(classes.textIcon, classes.leftIcon)}
                  />
                  Copenhagen
                </span>
                <span>, Denmark</span>
              </strong>
            </p>
          </Typography>
          <div className={classes.textCentered}>
            <Tooltip title="Read more" placement="bottom">
              <Fab color="secondary" component="a" href="#about">
                <DownIcon />
              </Fab>
            </Tooltip>
          </div>
        </div>
      </section>
      <About
        classes={classes}
        // ReactGA={ReactGA}
      />
      {typeof window !== 'undefined' && <BackgroundParticles />}
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
