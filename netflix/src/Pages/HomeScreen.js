import React from 'react'
import '../Styles/HomeScreen.css';
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Nav */}
        <NavBar/>
        {/* Banner */}
        <Banner/>
        {/* Row */}
    </div>
  )
}

export default HomeScreen