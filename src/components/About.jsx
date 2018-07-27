import React from 'react'
import Typography from '@material-ui/core/Typography'
import Technologies from './Technologies.jsx'
import joinClasses from './../helpers/join-classes'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-34976555-1')
ReactGA.pageview(window.location.pathname + window.location.search)

const About = ({ classes }) => (
  <section
    id="about"
    className={joinClasses(
      classes.section,
      classes.centeredY,
      classes.themePrimary,
      classes.themePrimaryContrastText
    )}>
    <div className={joinClasses(classes.typographyWrapper, classes.container)}>
      <Typography
        variant="display3"
        className={joinClasses(
          classes.noUserSelect,
          classes.w300,
          classes.display3
        )}>
        I make <strong className={classes.w400}>web applications</strong>,
        using these amazing open-source libraries:
        <Technologies ReactGA={ReactGA} />
        <span>
          Feel free to get in touch via{' '}
        </span>
        <ReactGA.OutboundLink
          eventLabel="contact.email"
          to="mailto:jonas.g.roessum@gmail.com"
          className={joinClasses(classes.textLink, classes.themeSecondaryText)}>
          email
        </ReactGA.OutboundLink>
        <span> or </span>
        <ReactGA.OutboundLink
          eventLabel="contact.twitter"
          to="https://twitter.com/jonasroessum"
          target="_blank"
          rel="noopener noreferrer"
          className={joinClasses(classes.textLink, classes.themeSecondaryText)}>
          twitter
        </ReactGA.OutboundLink>
        <span>!</span>
      </Typography>
    </div>
  </section>
)

export default About
