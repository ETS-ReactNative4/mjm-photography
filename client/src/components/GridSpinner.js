import React, { Component } from 'react'
import '../css/App.css'
import PropTypes from 'prop-types';



class GridSpinner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hide: false
    }
  }

  componentWillReceiveProps = (prevProps) => {
    if(prevProps.imgsLoaded !== this.props.imgsLoaded) {
      this.hideSpinners()
    }
  }

  hideSpinners = () => {
    const spinner = document.getElementById("grid-spinner-div")
    setTimeout(() => {
      spinner.classList.add("hide")
    }, 100);
  }
       

  render() { 
    return (
      <div className="grid-spinner-div" id="grid-spinner-div">
        <i className="fal fa-sync" style={{fontSize: "50px"}}></i>
      </div>
    )
  }
}

GridSpinner.propTypes = {
  timeout: PropTypes.number,
  spinnerSize: PropTypes.string,
}

export default GridSpinner;

