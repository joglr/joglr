import React from 'react'
import { withStyles } from 'material-ui/styles'
import Tooltip from 'material-ui/Tooltip'
import ECMAScriptLogo from './../media/ecmascript-logo.svg'
import webpackLogo from './../media/webpack-logo.svg'
import reactLogo from './../media/react-logo.svg'
import reduxLogo from './../media/redux-logo.svg'
import leafletLogo from './../media/leaflet-logo.svg'
import materialUILogo from './../media/material-ui-logo.svg'
import materialDesignLogo from './../media/material-design-logo.svg'

const technologies = [
  {
    title: 'ECMAScript',
    link: 'https://www.wikiwand.com/en/ECMAScript',
    logo: ECMAScriptLogo
  },
  {
    title: 'Webpack',
    link: 'https://webpack.js.org',
    logo: webpackLogo
  },
  {
    title: 'React',
    link: 'https://reactjs.org',
    logo: reactLogo
  },
  {
    title: 'Redux',
    link: 'https://redux.js.org',
    logo: reduxLogo
  },
  {
    title: 'Material UI',
    link: 'https://www.material-ui.com',
    logo: materialUILogo
  },
  {
    title: 'Material Design',
    link: 'https://material.io',
    logo: materialDesignLogo
  },
  {
    title: 'Leaflet',
    link: 'https://leafletjs.com',
    logo: leafletLogo
  }
]

const styles = theme => ({
  root: {
    padding: 2 * theme.spacing.unit,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 'auto'
  },
  logoImg: {
    height: 10 * theme.spacing.unit,
    margin: 1.5 * theme.spacing.unit,
    filter: `drop-shadow(0 ${theme.spacing.unit}px ${theme.spacing
      .unit}px hsla(0, 0%, 0%, 0.2))`
  }
})

const Technologies = ({ classes }) => (
  <div>
    <div className={classes.root}>
      {technologies.map((entry, key) => (
        <Tooltip key={key} title={entry.title} placement="top">
          <a href={entry.link} target="_blank" rel="noopener noreferrer">
            <img className={classes.logoImg} src={entry.logo} />
          </a>
        </Tooltip>
      ))}
    </div>
  </div>
)

export default withStyles(styles)(Technologies)
