import React from 'react'
import '../css/App.css'
import { Link } from "react-router-dom";

const Aside = (props) => {

  return (
    <aside className="aside">
      <nav className="nav-list basic-flex-col">

        <Link to="/">

          <div className="aside-icon-div">
            <i className="far fa-camera-retro aside-icon"></i>
          </div>
        </Link>

        <Link to="/info">
          <div className="aside-icon-div">
            <i className="fal fa-info-circle aside-icon"></i>
          </div>
        </Link>
      
        <a href="https://www.instagram.com/mimitch/" target="_blank" rel='noopener noreferrer'>
          <div className="aside-icon-div"><i className="fab fa-instagram aside-icon"></i>
          </div> 
        </a>

        <a href="mailto:<mimitch@mac.com>">
          <div className="aside-icon-div"> <i className="fal fa-envelope aside-icon"></i>
          </div> 
        </a>

      </nav>
    </aside>
  
  )
}

export default Aside;