import React from 'react'

// props : 
// {user: "syleemomo", name: "청소", done: false, description: "주말에 방 청소하기"}
function Todo({ user, name, done, description }){ 
  
  return (
    <>
      <h2>사용자: {user}</h2>
      <h3>할일: {name}</h3>
      <h4>할일 진행상태: {done? "완료": "진행중"}</h4>
      <p>할일에 대한 설명: {description}</p>
    </>
  )
}

export default Todo 