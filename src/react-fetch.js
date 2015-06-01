import React from 'react/addons'
import fetch from 'node-fetch'

export default class Fetch extends React.Component{

  constructor(props){
    super()

    this.state = {}
    this.fetchData(props.url)
  }

  fetchData(url){
    fetch(url)
    .then(res => {
      return res.json()
    })
    .then(json => {
      this.setState(json)
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
