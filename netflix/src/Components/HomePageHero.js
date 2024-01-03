import React, { useState, useEffect } from 'react'
import '../Styles/HomePageHero.css'
import axios from '../API/Axios';
import api_requests from '../API/Requests';

function HomePageHero() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const requests = await axios.get(api_requests.fetchNetflixOriginals);

        setMovie(
            requests.data.results[
                Math.floor(Math.random() * requests.data.results.length -1)
            ]
        );
      }
      fetchData();
    }, [])

    console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substring(0, n-1) + " ...": string;
    }

  return (
        <div className="hero" 
            style={{
                backgroundImage: `url('https://www.themoviedb.org/t/p/original/${movie?.backdrop_path}')`
            }}>
          <div className="hero_img_shadow">
            <div className="hero_movie">
                <div className="hero_movie_content">
                  <div className="movie_name">
                    <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
                  </div>
                  <div className="movie_description">
                    <h3>{truncate(`${movie?.overview}`, 250)}</h3>
                  </div>
                  <div className='hero_buttons'>
                    <button className='hero_button hero_play_button'> Play</button>
                    <button className='hero_button hero_mylist_button'> My List  + </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )
    }

export default HomePageHero;