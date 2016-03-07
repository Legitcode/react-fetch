import React, {Component, Children, cloneElement} from 'react'
import fetch from 'isomorphic-fetch'

export default class Fetch extends Component{

  constructor(props){
    super()
    this.state = {}
    this.fetchData(props)
  }

  fetchData(props){
    const { onSuccess, onError, options } = props
    fetch(props.url, options || {})
      .then(res => {
        return res.json()
      })
      .then(json => {
        this.setState(json)
        if(onSuccess) onSuccess(json)
      })
      .catch(error => {
        if(onError) onError(error)
      })
  }

  children(){
    return Children.map(this.props.children, child => {
      return cloneElement(child, this.state)
    })
  }

  render(){
    return (
      <div>
        {this.children()}
      </div>
    )
  }

}
