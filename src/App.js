import React, { Component } from 'react'

function App(){
  // 컴포넌트 
  function Repeat(props){
    let items = []
    for(let i=0; i<props.numTimes; i++){
      items.push(props.children(i))
    }
    return <div>{items}</div>
  }
  return (
    <Repeat numTimes={10}>
     {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  )
}

/*
<div>
 <div key={0}>This is item 0 in the list</div>
 <div key={1}>This is item 1 in the list</div>
 <div key={2}>This is item 2 in the list</div>
</div>
*/
export default App 