import React, { Component } from 'react'

class NameTag extends Component{
  state = {
    name: 'initial name'
  }
 
  changeName = () => {
    this.setState({name: "이름이 변경되었습니다 !"})
  }

  render(){ 
    console.log('first')
    setTimeout(() => {
      console.log('second')
    }, 0)
    console.log('third')

    const {name} = this.state 
    return (
      <>
        <h1>{name}</h1>
        <button type="button" onClick={this.changeName}>이름 변경</button>
      </>
    )
  }
}

export default NameTag 