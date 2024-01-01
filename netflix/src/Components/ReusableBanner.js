import React from 'react'
import '../Styles/ReusableBanner.css';

function ReusableBanner(props) {

    // const reusableBanner = ({image, title, description});

  return (
    <div className='reusable_banner'>
                <img className="reusable_banner_image" src={props.image}></img>
            <div className="reusable_banner_content">
                <div className="reusable_banner_title">
                <h1>{props.title}</h1>
                </div>
                <div className="reusable_banner_description">
                    <h3>{props.description}</h3>
                </div>
            </div>
        </div>
  )
}

export default ReusableBanner