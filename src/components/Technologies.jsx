import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import react from './../media/react-logo.jsx'
import materialUI from './../media/material-ui-logo.jsx'
import leaflet from './../media/leaflet-logo.jsx'

const technologies = [
  {
    title: 'React',
    link: 'https://reactjs.org',
    logo: react
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
  logoLink: {
    height: 10 * theme.spacing.unit,
    margin: 1.5 * theme.spacing.unit,
    filter: `drop-shadow(0 ${theme.spacing.unit / 2}px ${theme.spacing.unit /
      2}px hsla(0, 0%, 0%, 0.3))`,
  },
  '@media (max-width: 960px)': {
    logoLink: {
      height: 8 * theme.spacing.unit,
    }
  },
  visuallyhidden: {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    padding: '0',
    overflow: 'hidden',
    position: 'absolute'
  }
})

const Technologies = ({ classes, ReactGA }) => (
  <div>
    <div className={classes.root}>
      {technologies.map(({ title, link, logo: Logo }, key) => (
        <Tooltip key={key} title={title} placement="bottom">
          <ReactGA.OutboundLink
            className={classes.logoLink}
            eventLabel={'technology.' + title}
            to={link}
            target="_blank"
            rel="noopener noreferrer">
            <span className={classes.visuallyhidden}>Visit {title}</span>
            <Logo style={{ height: '100%' }}>
              <title>Visit {title}</title>
            </Logo>
          </ReactGA.OutboundLink>
        </Tooltip>
      ))}
    </div>
  </div>
)

export default withStyles(styles)(Technologies)
