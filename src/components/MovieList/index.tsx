'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        getMovies();
    }, [])

    const getMovies = () =>{
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'ead4112371bc30553518302cb873fb8f',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);            
        })
    }

    return (
        <ul className="movie-list">
            {movies.map((movie) =>
                <li className = 'movie-card'>
                    <p>
                        {movie.title}                       
                    </p>                    
                    <p className = 'description'>
                        {movie.overview}
                    </p>
                    <img
                     src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                     alt=""
                     />
                </li>
            )}
            
        </ul>
    )
}