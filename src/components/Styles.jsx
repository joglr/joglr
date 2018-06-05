import { Component } from 'react'

class Roboto extends Component {
  async componentDidMount() {
    await import('typeface-roboto')
    await import('./../hover.css')
  }
  render() {
    return null
  }
}

export default Roboto
