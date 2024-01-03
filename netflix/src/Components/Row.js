import React, { useEffect, useState } from 'react'
import "../Styles/Row.css"
import axios from '../API/Axios';
import api_requests from '../API/Requests';

function Row({title, fetchURL, isLargeRow=false}) {

    const baseURL = 'https://image.tmdb.org/t/p/original';

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const requests = await axios.get(fetchURL);

            setMovies(requests.data.results);
                return requests;
        }

        fetchData();
    }, [fetchURL])

    console.log(movies);

 return (
    <div className='row'>
        <div className="row_title">
            <h2>{title}</h2>
        </div>
        {movies.map((movie) => {
            return (
                <img 
                className={`row_poster ${isLargeRow ? 'row_poster_large' : ''}`}
                src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}/>
            );
        })}
    </div>
 )
}

export default Row;