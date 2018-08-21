import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/App.css'
import {Link} from "react-router-dom";


class GridTile extends Component {

  render() {
    const { images, index } = this.props
    
    return (
      <Link to={`/picture/${images[index].id}`} key={images.id} 
        images={images}>
        <div className={`item item-${images[index].id}`} 
          onClick={this.handleClick}>
          <img src={images[index].thumb} alt="Gallery" 
            className={'grid-image show'} 
            id={`${images[index].id.toString()}`} /> 
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