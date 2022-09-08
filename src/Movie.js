import React from 'react'

function Movie({ id, children, ...rest }){ // 여러개의 데이터를 하나로 묶어주는 연산자
  return (
    <>
      <h1>무비 정보</h1>
      <>{children}</>
    </>
  )
}

export default Movie 