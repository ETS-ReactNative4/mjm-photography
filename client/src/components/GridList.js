import React, { Component } from 'react'
import '../css/App.css'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


let counter = 0

class GridList extends Component {

  componentDidMount = () => {
    // window.onload = this.resizeAllGridItems();
    window.addEventListener('resize', this.resizeAllGridItems)
  }

  showImages = ( e ) => {
    this.resizeImages(e.target)
    counter++ 
    if (counter >= this.props.pictures.length) {
      this.resizeAllGridItems();
      this.props.loaded(true);
    }
  }

  resizeImages = (img) => {
    const imgHeight = Math.ceil(Math.round(img.getBoundingClientRect().height) /10 ) * 10
    img.style.height = `${imgHeight}px`
    // img.style.width = '100%'
  }
  

  resizeGridItem = (item) => {
    this.resizeImages(item)
    const imgHeight = item.querySelector('.grid-image').getBoundingClientRect().height
    // const grid = document.getElementById("main-grid");
    // grid.style.alignItems = "self-start";
    const rowSpan = imgHeight / 10;
    item.style.gridRowEnd = `span ${rowSpan}`;
    // this.resizeImages(item)
    // item.width = "100%"
  }

  resizeAllGridItems = () => {
    const allItems = [...document.getElementsByClassName("grid-item")];
    allItems.forEach(itm => this.resizeGridItem(itm))
  }

  render() {
    const { pictures } = this.props
    
    return (
      <div id="main-grid" className="main-grid">
        {pictures && pictures.map(item => 
          <Link to={`/picture/${item.id}`} key={item.id} className="grid-item">
            <img src={item.thumb} 
              alt="Gallery" 
              onLoad={ this.showImages }
              className={"grid-image"} 
              id={`grid-image-${item.id.toString()}`} /> 
          </Link>
        )}
      </div>
    )
  }
}

GridList.propTypes = {
  images: PropTypes.array,
}

export default GridList;