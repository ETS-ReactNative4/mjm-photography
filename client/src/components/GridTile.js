import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/App.css'
import {Link} from "react-router-dom";
import state from "../state"
let counter = 0;


class GridTile extends Component {
 
  showImages = (li, el) => {
    setTimeout(() => {
      
      const link = document.getElementById(li)
      const img = document.getElementById(el)
      const height = Math.floor(img.height / 10)
 
      link.style.height = `${ height * 10 - 6 }px`//subtracting 6 from each for grid-gap
      img.style.height = `${ height * 10 - 6 }px`
      link.style.gridRow = `span ${height}` 

      const htmlCol = document.getElementsByClassName("grid-image")
      const arr = Array.from(htmlCol)
      counter++

      if(counter >= this.props.images.length -1) {
        setTimeout(() => {
          arr.forEach(img => img.classList.add("show"))
        }, 50);
      }  
    }, 20);
   

  }

  render() {
    const { images, index } = this.props
    
    return (
      <Link to={`/picture/${images[index].id}`} key={images.id} 
        id={`link-${images[index].id.toString()}`} className="grid-link">
        <img src={images[index].thumb} 
          onClick={this.handleClick}
          alt="Gallery" 
          id={`thumb-${images[index].id.toString()}`}
          onLoad={this.showImages(`link-${images[index].id.toString()}`, `thumb-${images[index].id.toString()}`)}
          className={"grid-image"}
        /> 
      </Link>
    )
  }
}

GridTile.propTypes = {
  images: PropTypes.array,
  index: PropTypes.number
}

export default GridTile;