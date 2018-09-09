import React, { Component } from 'react'
import '../css/App.css'
import PropTypes from 'prop-types';


class GridSpinner extends Component {

  componentDidMount = () => {

    const spinner = document.getElementsByClassName("grid-spinner-div")
    const spinners = Array.from(spinner)
    setTimeout(() => {      
      spinners.forEach(item => item.classList.add("hide") )  
    }, this.props.timeout);
  }

  render() { 
    return (
      <div className="grid-spinner-div">
        <i className="fal fa-sync" style={{fontSize: this.props.spinnerSize}}></i>
      </div>
    )
  }
}

GridSpinner.propTypes = {
  timeout: PropTypes.number,
  spinnerSize: PropTypes.string,
}

export default GridSpinner;

