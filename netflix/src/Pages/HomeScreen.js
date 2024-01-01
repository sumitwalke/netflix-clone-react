import React from 'react'
import '../Styles/HomeScreen.css';
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner';
import BannerBreaks from "../Components/BannerBreaks";

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <NavBar/>

        <Banner/>
        
        <BannerBreaks/>

        <Banner/>

        <BannerBreaks/>
        
        <Banner/>
        
        <BannerBreaks/>

        <Banner/>

        <BannerBreaks/>
    </div>
  )
}

export default HomeScreen