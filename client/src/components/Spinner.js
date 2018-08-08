import React from 'react'
import '../css/App.css'

const Spinner = (props) => {
  return (
    <div id="loading-div">
      <div className="spinner-div">
        <i className="fal fa-spinner-third grid-tile-spinner"></i>
        {/* <i className="fal fa-spinner "></i> */}
      </div>
    </div>
  )
}

export default Spinner;