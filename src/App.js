import React from "react";
import {useEffect} from 'react';
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

//6d18a697

const API_URL = 'http://www.omdbapi.com?apikey=6d18a697'

const App = () => {

    const movie1 = {
        "Title": "Spiderman",
        "Year": "1990",
        "imdbID": "tt0100669",
        "Type": "movie",
        "Poster": "N/A"
    }

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="App">
            <h1>MovieList</h1>
            <div className="search">
                <input placeholder="Search for Movies" value="" onChange={() => {}}>
                </input>
                <img src={searchIcon} alt="Search" onClick={() => {}}></img>
            </div>
            <div className="container">
                <MovieCard movie={movie1}></MovieCard>
            </div>
        </div>
    );
}

export default App