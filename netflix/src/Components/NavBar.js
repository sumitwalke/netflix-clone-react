import React, { useEffect, useState } from 'react'
import '../Styles/NavBar.css';

function NavBar() {
  const [show,setShow] = useState(false);

  const transitionNavBar = () =>{
    if(window.scrollY>100){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    }
  }, []);

  const[isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  }

  return (
    <div className={`navbar ${show && `navbar_black`}`}>
        <div className="nav_content">
            <img className='nav_logo' src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt=""/>
            {isLoggedIn ? (
                  <div className="navbar-menu">
                    <ul to="/home">Home</ul>
                    <ul to="/about">About</ul>
                    <ul to="/contact">Contact</ul>
                  </div>) : (
                    <div></div>
                  )}
                  
            <div className="nav_account_handle">
              <img className='nav_avatar nav_actions' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
              <button className="login_logout_button nav_actions" onClick={toggleLogin}> {isLoggedIn ? "Login" : "Logout"}</button>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar