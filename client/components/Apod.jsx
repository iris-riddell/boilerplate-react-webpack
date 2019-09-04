import React from 'react'
import request from 'superagent'

const ApodUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

class Apod extends React.component {
  state = {
    title: ' ', explanation: ' ', url: ' '
  }

  componentDidMount () {
    return request
      .get(ApodUrl)
      .then((x) => {
        console.log(x)
      })
  }

  render () {
    return (
        <>
        <h2>{this.state.title}</h2>
        <iframe width="560" height="315" src={this.state.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>{this.state.explanation}</p>

        </>

    )
  }
}

export default Apod
