import React from 'react'
import '../css/App.css'

const Spinner = () => {
  return (
    <div id="loading-div">
      <div className="spinner-div">
        <i className="fal fa-spinner-third grid-tile-spinner"></i>
      </div>
    </div>
  )
}

export default Spinner;