import React, { useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

//6d18a697

const API_URL = 'http://www.omdbapi.com?apikey=6d18a697'

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
        /* console.log(movies); */
    }


    return (
        <div className="App">
            <h1>MovieList</h1>
            <div className="search">
                <input placeholder="Search for Movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
                </input>
                <img src={searchIcon} alt="Search" onClick={() => searchMovies(searchTerm)}></img>
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map(movie => (
                            <MovieCard movie={movie} key={movie.Title + movie.Year}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App