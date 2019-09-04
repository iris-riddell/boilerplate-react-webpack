import React, { Component } from 'react'

import { getProverb } from '../apiclient'

class Proverb extends Component {

  constructor (props) {
    super(props)
    this.state = {
      source: '',
      translation: ''
    }
    this.getProverbReact = this.getProverbReact.bind(this)
  }


  componentDidMount(){
    
    this.getProverbReact()
  }


  getProverbReact(){
    getProverb()
      .then( proverb => {
        const { source, translation } = proverb.body
        this.setState({source , translation})
      }
        
      )
  }

  render() {
    return (
      <div>
        <p >
      </div>
    )
  }
}

export default Proverb
