import React, { Component } from 'react'
import '../css/App.css'
import GridTile from '../containers/GridTileContainer'
import PropTypes from 'prop-types';

class GridList extends Component {

  render() {
    const { images } = this.props
    
    return (
      <div id="main-grid" className="main-grid show">
        {images && images.map((item, i) => 
          <GridTile images={images} 
            index={i} 
            key={item.id} 
          />
        )}
      </div>
    )
  }
}

GridList.propTypes = {
  images: PropTypes.array,
}

export default GridList;