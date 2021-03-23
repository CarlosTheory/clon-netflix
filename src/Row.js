import React, { useState, useEffect } from 'react';
import axios from './axios'; // Here axios its just an alias, because default export is 'instance'
import './Row.css';

function Row({title, obtainUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

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

    //console.table(movies);
    const baseUrlImage = 'https://image.tmdb.org/t/p/original';

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__films">
                {movies.map(movie => (
                    <img key={movie.id} className={`row__film ${isLargeRow && "row__posterLarge"}`} src={`${baseUrlImage}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name? movie.name : movie.title}/>
                ))}
            </div>
        </div>
    );
}

export default Row;