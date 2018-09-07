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
        <p className={classes.paragraph}>
          I am passionate about making <strong className={classes.w400}>
          awesome user experiences</strong> using state-of-the-art open-source libraries, such as:
        </p>
        <Technologies ReactGA={ReactGA} />
        <p className={classes.paragraph}>
          Feel free to get in touch via{' '}
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
        </p>
      </Typography>
    </div>
  </section>
)

export default About
