import React, { Component } from 'react'
import '../css/App.css'
import PropTypes from 'prop-types';


class GridSpinner extends Component {

  componentDidMount = () => {
    if (this.props.loaded) {
      this.hideSpinners(300)
    }
  }

  componentWillReceiveProps = () => {

    if(this.props.spinnerSize === "50px") {
      this.hideSpinners(30)
    }
  }

  hideSpinners = (time) => {
    const spinner = document.getElementsByClassName("grid-spinner-div")
    const spinners = Array.from(spinner)
    setTimeout(() => {
      console.log("timeout")
      spinners.forEach(item => item.classList.add("hide"))
    }, time);
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

