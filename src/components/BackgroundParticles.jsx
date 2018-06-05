import React from 'react'
import { withStyles } from 'material-ui/styles'
import init from './../helpers/background-particles'

const options = {
  gravity: [ 0, 0 ],
  count: 7,
  margin: 5,
  particleColor: 'hsl(0, 0%, 50%)'
}
let canvas
const styles = {
  root: {
    position: 'fixed',
    top: 0,
    zIndex: '-1',
    filter: 'blur(7px)'
  }
}

const BackgroundParticles = ({ classes }) => (
  <canvas
    className={classes.root}
    ref={ref => {
      if (ref && !canvas) {
        canvas = ref
        init(ref, window, document, options)
      }
    }}
  />
)

export default withStyles(styles)(BackgroundParticles)
