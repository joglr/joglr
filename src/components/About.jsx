import React from 'react'
import Typography from '@material-ui/core/Typography'
import Technologies from './Technologies.jsx'
import joinClasses from './../helpers/join-classes'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-34976555-1')
ReactGA.pageview(window.location.pathname + window.location.search)

const About = ({ classes }) => (
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
          If you have any questions, feel free to get in touch with me via{' '}
        </span>
        <ReactGA.OutboundLink
          eventLabel="contact.email"
          to="mailto:jonas.g.roessum@gmail.com"
          className={joinClasses(classes.themeSecondaryText, classes.link)}>
          e-mail
        </ReactGA.OutboundLink>
        <span> or </span>
        <ReactGA.OutboundLink
          eventLabel="contact.twitter"
          to="https://twitter.com/intent/tweet?screen_name=jonasroessum"
          target="_blank"
          rel="noopener noreferrer"
          className={joinClasses(classes.themeSecondaryText, classes.link)}>
          twitter
        </ReactGA.OutboundLink>
        <span>!</span>
      </Typography>
    </div>
  </section>
)

export default About
