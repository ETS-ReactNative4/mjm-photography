import React, { Component } from 'react'
import '../css/App.css'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


let counter = 0

class GridList extends Component {

  componentDidMount = () => {
    window.onload = this.resizeAllGridItems();
  }

  showImages = ( e ) => {
    const img = e.target
    const imgHeight = Math.ceil(Math.round(img.getBoundingClientRect().height) /10 ) * 10
    img.style.height = `${imgHeight}px`
    counter++ 

    if (counter >= this.props.pictures.length) {

      const allItems = document.getElementsByClassName("grid-item");
      const allImages = document.getElementsByClassName("grid-image");

      for(let i = 0; i < allItems.length; i++){
        this.resizeInstance( allItems[i] ) ;
      }
      this.props.loaded(true)

      // setTimeout(() => {
      //   for (let i = 0; i < allImages.length; i++) {
      //     allImages[i].classList.add("show")
      //   }    
      // }, 10);
    }
  
    
  
  }

   resizeInstance = (instance) => {
     this.resizeGridItem(instance);
   }

  resizeGridItem = (item) => {
    const imgHeight = item.querySelector('.grid-image').getBoundingClientRect().height

    const grid = document.getElementById("main-grid");
    grid.style.alignItems = "self-start";

    const rowSpan = imgHeight / 10;
    item.style.gridRowEnd = `span ${rowSpan}`;
  }

  resizeAllGridItems = () => {
    const allItems = document.getElementsByClassName("grid-item");
    for(let i =0 ; i < allItems.length; i++){
      this.resizeGridItem(allItems[i]);
    }
  }

  render() {
    console.log(this.props)
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