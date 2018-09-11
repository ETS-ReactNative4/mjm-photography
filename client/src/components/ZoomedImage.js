import React, { Component } from 'react'

class ZoomedImage extends Component {
  render() {
    return (
      <div className="zoomed-image-div">
        <img src={this.props.image} alt="" className="zommed-image"/>
        <i className="far fa-times-circle"></i>
      </div>
    )
  }
}

export default ZoomedImage;