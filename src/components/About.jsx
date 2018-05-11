import React from 'react'
import Typography from 'material-ui/Typography'
import Tooltip from 'material-ui/Tooltip'
import Technologies from './Technologies.jsx'
import joinClasses from './../helpers/join-classes'

const About = ({ classes, ReactGA }) => (
  <section
    className={joinClasses(
      classes.section,
      classes.centeredY,
      // classes.themePrimary,
      classes.themePrimaryContrastText
    )}>
    <div className={joinClasses(classes.typographyWrapper, classes.container)}>
      <Typography
        variant="display3"
        className={joinClasses(
          classes.themePrimaryContrastText,
          classes.noUserSelect,
          classes.w300,
          classes.display3
        )}>
        I make <strong className={classes.w400}>web applications</strong>, using
        these state-of-the-art technologies:
        <Technologies ReactGA={ReactGA} />
        <span>
          If you have any questions, feel free to get in touch with me{' '}
        </span>
        <Tooltip title="E-mail">
          <ReactGA.OutboundLink
            eventLabel="contact.email"
            to="mailto:jonas.g.roessum@gmail.com"
            className={joinClasses(classes.themeSecondaryText, classes.link)}>
            here
          </ReactGA.OutboundLink>
        </Tooltip>
        <span> or </span>
        <Tooltip title="Twitter">
          <ReactGA.OutboundLink
            eventLabel="contact.twitter"
            to="https://twitter.com/intent/tweet?screen_name=jonasroessum"
            target="_blank"
            rel="noopener noreferrer"
            className={joinClasses(classes.themeSecondaryText, classes.link)}>
            here
          </ReactGA.OutboundLink>
        </Tooltip>
        <span>!</span>
      </Typography>
    </div>
  </section>
)

export default About
