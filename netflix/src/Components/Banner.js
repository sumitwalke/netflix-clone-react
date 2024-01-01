import React from 'react'
import '../Styles/Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className="banner_img_shadow">
        <div className="subscription">
          <div className='subscription_card'>
            <div className="subscription_content">
              <h3> Welcome Back!</h3>
              <h1>Unlimited movies, TV shows and more</h1>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <div className='subscription_button'>
                <button className='subscribe_button'> Sign In </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner