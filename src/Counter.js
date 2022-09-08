import React, { Component } from 'react'

class Counter extends Component{
 render(){
  // this.props = {user: "성용"}
  console.log(this.props)
  return (
    <>
      <h1>props 변경</h1>
    </>
  )
 }
}

export default Counter 