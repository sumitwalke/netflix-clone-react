import React, { useEffect, useState } from 'react'
import '../Styles/NavBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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

  return (
    <div className={`navbar ${show && `navbar_black`}`}>
        <div className="nav_content">
            <img className='nav_logo' src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt=""/>
            <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
            <FontAwesomeIcon icon="fa-solid fa-caret-down" />
        </div>
    </div>
  )
}

export default NavBar