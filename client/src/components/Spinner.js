import React from 'react'
import '../css/App.css'
import CameraSpinner from './CameraSpinner'

const Spinner = () => {
  return (
    <div id="loading-div">
      {/* <div className="spinner-background"> */}
      <img src="/img/mjm_thumb_ - 37.jpg" alt="" className="spinner-bg-image" />
      <CameraSpinner />
      {/* </div> */}
    </div>
  )
}

export default Spinner;