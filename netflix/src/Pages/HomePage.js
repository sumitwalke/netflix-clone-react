import React from 'react'
import '../Styles/HomePage.css'
import NavBar from '../Components/NavBar'
import HomePageHero from "../Components/HomePageHero";
import Row from '../Components/Row';
import api_requests from '../API/Requests';

function HomePage() {
  return (
    <div>
        <NavBar/>
        <HomePageHero/>
        <Row title="Netflix Originals" fetchURL={api_requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="Top Rated" fetchURL={api_requests.fetchTopRated} isLargeRow={false}/>
        <Row title="Action Movies" fetchURL={api_requests.fetchActionMovies} isLargeRow={false}/>
        <Row title="Comedy Movies" fetchURL={api_requests.fetchComedyMovies} isLargeRow={false}/>
        <Row title="Horror Movies" fetchURL={api_requests.fetchHorroMovies} isLargeRow={false}/>
        <Row title="Romanctic Movies" fetchURL={api_requests.fetchRomanceMovies} isLargeRow={false}/>
        <Row title="Documentaries" fetchURL={api_requests.fetchDocumentaries} isLargeRow={false}/>
    </div>
  )
}

export default HomePage