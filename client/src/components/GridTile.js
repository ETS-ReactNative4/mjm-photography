import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/App.css'
import { Link } from "react-router-dom";
import GridSpinner from './GridSpinner'
// import Spinner from './Spinner'

// let tile;


class GridTile extends Component {


  componentDidMount = () => {
    // window.addEventListener("scroll", () => tile.style.transform = `translate(${window.pageYOffset}px, ${window.pageYOffset}px)`, true)

  }

  componentWillReceiveProps = () => {
    
    setTimeout(() => {
      // console.log(this.props)

    }, 200);
  }

  showImages = ( index, e ) => {
    const img = e.target
    const gridImg = document.getElementById(img.id)
    const imgDiv = document.getElementById(`grid-tile-div-${index}`)
    const tile = document.getElementById('grid-image-1').getBoundingClientRect()
    console.log(tile)
    // console.log(imgDiv)
    const imgSize = {
      x: img.width, 
      y: img.height
    }

    imgDiv.style.height = `${imgSize.y}`
    imgDiv.style.gridRowEnd = `span ${imgSize.y}`
    
    this.props.loaded(true)
    setTimeout(() => {
      gridImg.classList.add("show")
    }, 10);
  }

  render() {
    const { images, index } = this.props
    return (
      <div className="grid-tile-div" id={`grid-tile-div-${index}`}>
        <Link to={`/picture/${images[index].id}`} key={images.id} className="link">
          <img src={images[index].thumb} 
            alt="Gallery" 
            onLoad={ (e)=> this.showImages(index, e)}
            className={"grid-image"} 
            id={`grid-image-${images[index].id.toString()}`} /> 
          {/* <GridSpinner loaded={this.props.loaded} spinnerSize="30px" /> */}
        </Link>
      </div>
    )
  }
}

GridTile.propTypes = {
  images: PropTypes.array,
  index: PropTypes.number
}

export default GridTile;