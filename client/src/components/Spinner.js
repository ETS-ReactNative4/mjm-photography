import React from 'react'
import '../css/App.css'
import CameraSpinner from './CameraSpinner'

const Spinner = () => {
  return (
    <div id="loading-div">
      <div className="spinner-background">
        <img src="/img/mjm_thumb_ - 37.jpg" alt="" className="spinner-bg-image" />
      </div>
      <div className="spinner-div">
        <CameraSpinner />
        {/* <i className="fal fa-spinner-third grid-tile-spinner"></i> */}
      </div>
    </div>
  )
}

export default Spinner;