import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, SetMovie] = useState([]);
    const title = (movie?.title || movie?.name || movie?.original_name)?.toUpperCase() || '';
    const release_date = (movie?.first_air_date)?.substr(0,4) || '';
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
            backgroundImage: `linear-gradient(270deg, transparent, rgba(37, 37, 37, 0), #111), url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {title}
                </h1>
                <div className="banner__information">
                    <div className="banner__data">
                        <p className="banner__rating">
                            {movie?.vote_average}
                        </p>
                        <p className="banner__country">
                            {movie?.origin_country}
                        </p>
                        <p className="banner__release-date">
                            {release_date}
                        </p>
                    </div>
                    <p className="banner__description">
                        {truncate(movie?.overview, 250)}
                    </p>
                </div>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
            </div>
        </header>
    )
}

export default Banner