import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

function App() {
  const API_URL = 'http://omdbapi.com?apikey=76d7d20f'

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(['']);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
    //console.log(data.Search)
  }

  
  //default search text
  useEffect(() => {
    searchMovies('Star Wars')
    }, [])

    function submitSearch(e) {
      e.preventDefault()
      searchMovies(searchTerm)
    }

  return (
    <>
      <h1>The Movie Archive</h1>
      <form className='search' onSubmit={submitSearch}>
        <input placeholder='Search movies here' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  ></input>
        <img src={SearchIcon} alt='search' onClick={() => {searchMovies(searchTerm)}}></img>
      </form>
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (<MovieCard key={`${crypto.randomUUID()}`} className='moviecard' movie={movie}/>))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies found</h2>
          </div>
        )
      }

    </>
  )
}

export default App
