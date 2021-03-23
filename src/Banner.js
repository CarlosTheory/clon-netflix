import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';

function Banner(){
    const [movie, setMovie] = useState([]);
    const baseUrlImage = 'https://image.tmdb.org/t/p/original';

    useEffect(() => {
        async function obtainData(){
            const request = await axios.get(requests.obtainNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        };
        obtainData();
    }, []);

    console.log(movie);

    return(
        <header className="banner" style={{
            backgroundSize:'cover',
            backgroundImage: `url(${baseUrlImage}${movie?.backdrop_path})`,
            backgroundPosition:"center center",
        }}>
            <div className="banner__contents">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                {/* {Description} */}
            </div>
        </header>
    );
}

export default Banner;