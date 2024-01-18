import React from "react"

const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <a href={`https://www.imdb.com/title/${movie.imdbID}/`}>
          <img src={movie.Poster !== 'N/A' ? movie.Poster :'http://via.placeholder.com/400'} />
        </a>
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div> 
  )
}

 export default MovieCard