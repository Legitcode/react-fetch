import React from 'react'

//this is to hack around a bug, see:
//https://github.com/matthew-andrews/isomorphic-fetch/pull/20
//import fetch from 'isomorphic-fetch'
import fetch_ from 'isomorphic-fetch';
var fetch = fetch_.bind(undefined);

export default class Fetch extends React.Component{

  constructor(props){
    super()

    this.state = {}
    this.fetchData(props)
  }

  fetchData(props){
    fetch(props.url, props.options || {})
    .then(res => {
      return res.json()
    })
    .then(json => {
      this.setState(json)
      if(this.props.onSuccess) this.props.onSuccess(json)
    })
    .catch(error => {
      if(this.props.onError) this.props.onError(error)
    })
  }

  children(){
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, this.state)
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
