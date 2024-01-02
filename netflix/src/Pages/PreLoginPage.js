import React from 'react'
import '../Styles/HomeScreen.css';
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner';
import BannerBreaks from "../Components/BannerBreaks";
import ReusableBanner from "../Components/ReusableBanner";

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <NavBar/>

        <Banner/>
        
        <BannerBreaks/>

        <ReusableBanner
          title="Enjoy on your TV"
          description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        />

        <BannerBreaks/>

        <ReusableBanner
          title="Download your shows to watch offline"
          description="Save your favourites easily and always have something to watch."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        />

        <BannerBreaks/>

        <ReusableBanner
          title="Watch everywhere"
          description=" Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        />

        <BannerBreaks/>

        <ReusableBanner
          title="Create profiles for kids"
          description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          image="https://occ-0-5230-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
        />

        <BannerBreaks/>

    </div>
  )
}

export default HomeScreen