import React, { Component } from 'react'
import '../css/App.css'
import PropTypes from 'prop-types';

// const styles = {
//   fontSize: this.props.spinnerSize
// }


class GridSpinner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spinnerStyle: {
        fontSize: this.props.spinnerSize,
      }
    }
  }

  componentDidMount = () => {
    if (this.props.loaded) {
      this.hideSpinners(200)
    }
  }

  componentWillReceiveProps = () => {
    if(this.props.spinnerSize === "50px") {
      this.hideSpinners(40)
    }
  }

  hideSpinners = (time) => {
    const spinner = document.getElementsByClassName("fa-sync")
    const spinners = Array.from(spinner)
    setTimeout(() => {
      spinners.forEach(item => item.classList.add("hide"))
    }, time);
  }
       

  render() { 
    // console.log(this.props)
    return (
      <div className="grid-spinner-div">
        <i className="fal fa-sync" style={this.state.spinnerStyle}></i>
      </div>
    )
  }
}

GridSpinner.propTypes = {
  timeout: PropTypes.number,
  spinnerSize: PropTypes.string,
}

export default GridSpinner;

