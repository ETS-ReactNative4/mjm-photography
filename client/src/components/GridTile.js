import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/App.css'
import { Link } from "react-router-dom";
import GridSpinner from './GridSpinner'
// import Spinner from './Spinner'

class GridTile extends Component {

  // componentWillReceiveProps = () => {
  //   setTimeout(() => {
  //     console.log(this.props)

  //   }, 300);
  // }

  showImages = ( e ) => {
    const gridImg = document.getElementById(e.target.id)
    this.props.loaded(true)
    setTimeout(() => {
      gridImg.classList.add("show")
    }, 10);
  }

  render() {
    const { images, index } = this.props
    return (
      <Link to={`/picture/${images[index].id}`} key={images.id} className="link">
        <div className="grid-tile-div">
          <img src={images[index].thumb} 
            alt="Gallery" 
            onLoad={this.showImages}
            className={"grid-image"} 
            id={`grid-image-${images[index].id.toString()}`} /> 
          <GridSpinner loaded={this.props.loaded} spinnerSize="30px" />
        </div>
      </Link>
    )
  }
}

GridTile.propTypes = {
  images: PropTypes.array,
  index: PropTypes.number
}

export default GridTile;