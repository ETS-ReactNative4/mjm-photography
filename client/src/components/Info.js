import React from 'react'
import '../css/App.css'

const Info = (props) => {
  return (
    <div className="info-main">
      <p className="info-text">
      Hello, I'm web developer and amature photographer based in Austin, TX.
      </p>

      <p className="info-text">I designed and built this site myself to showcase some of my photos from over the years. I hope you enjoy them.</p>

      <p className="info-text">Check out my web developer portfolio site <a href="http://mikejmitchell.com/" target="_blank" rel='noopener noreferrer'>here</a>.
      Thanks!</p>
      
      <img src="img/camera.png" alt="" className="camera-image"/> 

      
      
    </div>
  )
}

export default Info;