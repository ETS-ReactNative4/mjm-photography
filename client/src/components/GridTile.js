import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/App.css'
import { Link } from "react-router-dom";
import GridSpinner from './GridSpinner'
import Spinner from './Spinner'


let counter = 0;
class GridTile extends Component {

  constructor(props) {
    super(props) 
    this.state = {

    }
  }


  showImages = () => {
    const htmlCol = document.getElementsByClassName("grid-image")
    const picArr = Array.from(htmlCol)
    counter++

    if(counter >= this.props.images.length -1) {
      this.props.loaded(true)
      setTimeout(() => {
        picArr.forEach(img => img.classList.add("show"))
      }, 20);
    }
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
            id={`${images[index].id.toString()}`} /> 
            
          <GridSpinner loaded={this.props.loaded} spinnerSize="30px" />
        </div>
        {/* <Spinner /> */}
      </Link>
    )
  }
}

GridTile.propTypes = {
  images: PropTypes.array,
  index: PropTypes.number
}

export default GridTile;