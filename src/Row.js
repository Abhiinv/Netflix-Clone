import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL_img = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, isLargeRow }) {
    // defining state -> short term memory
    // useState(initialState) returns an array where the first itme is the state value, and the second item is a function that updates the state
    const [ movies, setMovies ] = useState([]);
    const [trailerURL, setTrailerURL] = useState('');
    // code runs based on a specific condition
    // if [], code runs only once when the row loads
    // inside [], we write variables on which the run condition depends
    useEffect(
        () => {
            async function fetchData() {
                const request = await axios.get(fetchURL);
                setMovies(request.data.results);
                return request;
            }
            fetchData();
        }, [fetchURL]
    );

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerURL){
            setTrailerURL('');
        }
        else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get('v'));
            }).catch(error => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2 className="heading">{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img key={movie.id} onClick={() => handleClick(movie)} className="row__poster" src={`${baseURL_img}${movie.poster_path}`} alt={movie?.title || movie?.name || movie?.original_name} />
                ))}
            </div>
            {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
        </div>
    )
}

export default Row;

// { `row__poster ${isLargeRow && "row__posterLarge"}` }

// { isLargeRow ? movie.poster_path : movie.backdrop_path }