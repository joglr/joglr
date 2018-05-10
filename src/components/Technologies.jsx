import React from 'react'
import { withStyles } from 'material-ui/styles'
import Tooltip from 'material-ui/Tooltip'
import ECMAScript from './../media/ecmascript-logo.svg'
import nodejs from './../media/nodejs-logo.svg'
import npm from './../media/npm-logo.svg'
import webpack from './../media/webpack-logo.svg'
import react from './../media/react-logo.svg'
import redux from './../media/redux-logo.svg'
import leaflet from './../media/leaflet-logo.svg'
import materialUI from './../media/material-ui-logo.svg'
import materialDesign from './../media/material-design-logo.svg'

const technologies = [
  {
    title: 'Material Design',
    link: 'https://material.io',
    logo: materialDesign
  },
  {
    title: 'ECMAScript',
    link: 'https://en.wikipedia.org/wiki/ECMAScript',
    logo: ECMAScript
  },
  {
    title: 'NodeJS',
    link: 'https://nodejs.org',
    logo: nodejs
  },
  {
    title: 'Node Package Manager',
    link: 'https://www.npmjs.com',
    logo: npm
  },
  {
    title: 'Webpack',
    link: 'https://webpack.js.org',
    logo: webpack
  },
  {
    title: 'React',
    link: 'https://reactjs.org',
    logo: react
  },
  {
    title: 'Redux',
    link: 'https://redux.js.org',
    logo: redux
  },
  {
    title: 'Material UI',
    link: 'https://www.material-ui.com',
    logo: materialUI
  },
  {
    title: 'Leaflet',
    link: 'https://leafletjs.com',
    logo: leaflet
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
            <img className={classes.logoImg} src={entry.logo} alt={entry.title} />
          </a>
        </Tooltip>
      ))}
    </div>
  </div>
)

export default withStyles(styles)(Technologies)
