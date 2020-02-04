import { Tooltip, withStyles } from '@material-ui/core'
import React from 'react'
import leaflet from './../media/leaflet-logo'
import materialUI from './../media/material-ui-logo'
import react from './../media/react-logo'

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
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 'auto'
  },
  logoLink: {
    height: theme.spacing(10),
    margin: theme.spacing(1.5),
    filter: `drop-shadow(0 ${theme.spacing(0.5, 0.5)} hsla(0, 0%, 0%, 0.3))`
  },
  '@media (max-width: 960px)': {
    logoLink: {
      height: theme.spacing(8)
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
