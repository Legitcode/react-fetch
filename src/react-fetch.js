import React from 'react/addons'
import fetch from 'isomorphic-fetch'

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
      return React.addons.cloneWithProps(child, this.state)
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
