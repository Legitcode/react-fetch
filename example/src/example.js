import React from 'react'
import ReactDOM from 'react-dom'
import Fetch from 'react-fetch'

export default class App extends React.Component{

  onError(error){
    console.log(error)
  }

  render(){
    return (
      <Fetch url="http://httpbin.org/headers" onError={this.onError}>
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
ReactDOM.render(<App />, document.getElementById('app'));
