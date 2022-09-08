import React, { Component } from 'react'

class Animal extends Component {
  state = { // 초기 데이터 
    type: 'cat',
    name: 'meyow',
    size: 'small',
    sound: 'low',
    appearence: 'cute'
  }
  render(){
    const { type, name, size, sound, appearence } = this.state  

    return (
      // HTML 템플릿 + 데이터 반환 
      <>
        <h1>동물정보 출력</h1>
        <h3>종류 - {type}</h3>
        <h3>이름 - {name}</h3>
        <h3>크기 - {size}</h3>
        <h3>소리 - {sound}</h3>
        <h3>생김새 - {appearence}</h3>
      </>
    )
  }
}

export default Animal