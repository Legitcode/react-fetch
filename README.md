# React Fetch

## Install

    npm install react-fetch

## Props

- `url`: where to fetch json data from
- `onSuccess`: function on successfully fetching the data
- `onError`: function to be called on error
- `options`: object containing parameters for the request (see the [fetch](https://fetch.spec.whatwg.org/) spec)

## Example

pass an api endpoint and the resulting object will be passed as a prop.

~~~js

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


~~~

### Rebuilding
  
Run this to view the example in `example/dist`

    npm install
    npm run build
