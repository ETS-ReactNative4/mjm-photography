import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import state from "../state"


let counter = 0;
class GridList extends Component {
state = {
  images: state.pictures,
  loaded: false
}

  componentDidMount = () => {    
    console.log(this.props);
    
    // setTimeout(() => {
    //   document.getElementById("main-grid").classList.add("show")
    // }, 30);
  }


  render() {
    // const { images } = this.props
    return (
      <div id="main-grid" className="main-grid show">
        {this.state.images && this.state.images.map((item, i) => 
          <GridTile images={this.state.images} 
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