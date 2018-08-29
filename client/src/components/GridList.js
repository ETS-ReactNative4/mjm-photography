import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile'
import PropTypes from 'prop-types';

class GridList extends Component {
state = {
  loaded: false
}

  componentDidMount = () => {    
    if (this.props.loaded) {
      setTimeout(() => {
        document.getElementById("main-grid").classList.add("show")
      }, 30);
    }  
  }

  render() {
    const { images } = this.props
    return (
      <div id="main-grid" className="main-grid">
        {images && images.map((item, i) => 
          <GridTile images={images} 
            index={i} 
            key={item.id} />
        )}
      </div>
    )
  }
}

GridList.propTypes = {
  images: PropTypes.array,
}

export default GridList;