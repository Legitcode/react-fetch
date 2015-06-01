import React from 'react/addons'
import fetch from 'node-fetch'

export default class Fetch extends React.Component{

  constructor(props){
    super()

    this.state = {}
    this.fetchData()
  }

  fetchData(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
    .then(res => {
      console.log(res)
    })
  }

  children(){
    return React.Children.map(this.props.children, child => {
      return React.addons.cloneWithProps(child, {
        name: 'test'
      })
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
