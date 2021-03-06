import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from './axios'; // Here axios its just an alias, because default export is 'instance'
import {API_KEY} from './requests';
import movieTrailer from 'movie-trailer';
import './Row.css';

function Row({title, obtainUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState([]);

    // A snippet of code which runs based on a specific condition
    useEffect(()=>{
        //if [] run once, when the row loads and don't run it again

        async function obtainData() {
            const request = await axios.get(obtainUrl);
            //console.log(request);
            setMovies(request.data.results);
            return request;
        }
        obtainData();
    }, [obtainUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars:{

        },
    };

    const handleClick = (movie) => {
        console.log(movie.name);
        console.log(API_KEY)
        if (trailerUrl){ //If it is already open, close it
            setTrailerUrl('');
        } else {
            movieTrailer(null, {tmdbId:movie.id, apiKey:API_KEY}).then(url => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error));
        }
    }

    //console.table(movies);
    const baseUrlImage = 'https://image.tmdb.org/t/p/original';

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__films">
                {movies.map(movie => (
                    <img key={movie.id} className={`row__film ${isLargeRow && "row__posterLarge"}`} src={`${baseUrlImage}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name? movie.name : movie.title} onClick={() => handleClick(movie)}/>
                ))}
            </div>
            {console.log("trailer ", trailerUrl)}
            {trailerUrl.length > 0 &&  <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}

export default Row;