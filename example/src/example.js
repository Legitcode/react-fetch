import React from 'react'
import Fetch from 'react-fetch'

export default class App extends React.Component{

  render(){
    return (
      <Fetch>
        <TestComponent/>
      </Fetch>
    )
  }

}

class TestComponent extends React.Component{
  render(){
    console.log(this.props)
    return <div/>
  }
}
React.render(<App />, document.getElementById('app'));