import React from 'react'
import Fetch from 'react-fetch'

export default class App extends React.Component{

  render(){
    return (
      <Fetch url="http://httpbin.org/headers">
        <TestComponent/>
      </Fetch>
    )
  }

}

class TestComponent extends React.Component{
  render(){
    
    return (
      <div>
      {this.props.headers ? <div>Your User-Agent: {this.props.headers['User-Agent']}</div>: 'loading'}
      </div>
    )
  }
}
React.render(<App />, document.getElementById('app'));