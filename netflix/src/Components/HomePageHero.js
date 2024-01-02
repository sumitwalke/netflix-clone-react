import React from 'react'
import '../Styles/HomePageHero.css'

function HomePageHero() {
  return (
        <div className="hero">
          <div className="hero_img_shadow">
            <div className="hero_movie">
              <div className='hero_movie_card'>
                <div className="hero_movie_content">
                  <h1>Movie Name</h1>
                  <h3>Watch anywhere. Cancel anytime.</h3>
                  <div className='hero_buttons'>
                    <button className='hero_button'> Play </button>
                    <button className='hero_button'> My List </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

export default HomePageHero