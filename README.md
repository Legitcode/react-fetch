##React Slug
![gif demo](https://s3.amazonaws.com/f.cl.ly/items/2N330o430g3g2s2e0S0E/Screen%20Recording%202015-02-27%20at%2005.02%20PM.gif)

##Install

`npm install react-slug`

##Example

It acts exactly the same as a regular input, the onChange will return the event as a second parameter.

~~~js

import React from 'react'
import Slug from 'react-slug'

export default class App extends React.Component{

  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    console.log(event.target.value)
  }

  render(){
    return <Slug value="this will be stringified" onChange={this.handleChange} className="test" />
  }
}

~~~

###Rebuilding
  
  Run this to view the example in `example/dist`

  npm run build

###Description

This is a super simple react component that will strip any non alpha-numeric characters for you. It will turn spaces into hyphens. 
Thanks to [Jed Watson](http://github.com/jedwatson) for the gulpfile stuff ;)