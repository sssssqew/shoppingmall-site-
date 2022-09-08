import React from 'react'
import Movie from './Movie'

// props 객체 : { movies, authors }
function MovieList({ movies }){
  return (
    <>
      {movies.map( (movie, id) => {
        return (
          <Movie key={id} 
          {...movie}></Movie>
        )
      })}
    </>
  )
}

export default MovieList 