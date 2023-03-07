import React from "react";
import {useEffect} from 'react';

//6d18a697

const API_URL = 'http://www.omdbapi.com?apikey=6d18a697'

const App = () => {

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <h1>hi</h1>
    );
}

export default App