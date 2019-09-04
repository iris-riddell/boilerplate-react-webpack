import React from 'react'
import request from 'superagent'
const ur1 = 'https://cat-fact.herokuapp.com/facts/random'

class Insults extends React.Component {
    state = {
      text: '' }

    componentDidMount () {
      request.get(ur1)
        .then(res => {
          const { text } = res.body
          this.setState({ text })
        })
        // .catch(err => {
        //   sendStatus(500).send(err.message)
        // })
    }

    render () {
      return (
        <div>
          {this.state.text}
        </div>
      )
    }
}

export default Insults
