import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile'
import PropTypes from 'prop-types';

class GridList extends Component {

  render() {
    if (this.props.images){
      return (
        <div id="container" className="main-grid container">
          {this.props.images.map((item, i) => <GridTile images={this.props.images} index={i} key={item.id} />)}
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}

GridList.propTypes = {
  images: PropTypes.array,
}

export default GridList;