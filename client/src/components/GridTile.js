import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/App.css'
import {Link} from "react-router-dom";


class GridTile extends Component {

  render() {

    const pic = this.props.images
    const i = this.props.index

    return (
      <Link to={`/picture/${pic[i].id}`} key={pic.id} 
        images={this.props.images}>
        <div className={`item item-${pic[i].id}`} 
          onClick={this.handleClick}>
          <img src={pic[i].thumb} alt="Gallery" 
            className={'grid-image show'} 
            id={`${pic[i].id.toString()}`} /> 
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