import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, SetMovie] = useState([]);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const movieIndex = Math.floor(Math.random() * request.data.results.length - 1);
            SetMovie(
                request.data.results[movieIndex]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log({movie});

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__information">
                    <p className="banner__description">
                        {truncate(movie?.overview, 250)}
                    </p>
                    <p className="banner__release-date">
                        Release Date: {movie?.first_air_date}
                    </p>
                    <p className="banner__rating">
                        Rating: {movie?.vote_average}
                    </p>
                </div>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner