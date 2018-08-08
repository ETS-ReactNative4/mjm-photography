import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/App.css'
import {Link} from "react-router-dom";


class GridTile extends Component {


  // handleClick = (e) => {
  //   // console.log(e.target.id);
  // }

  // load = (arg) => {
  //   // console.log("load", arg.props);
  // }

  render() {

    const pic = this.props.data
    const i = this.props.index

    // console.log(pic[0].thumb);
    

    return (
      <Link to={`/picture/${pic[i].id}`} key={pic.id}>
        <div className="item-main">
          <div className={`item item-${pic[i].id}`} onClick={this.handleClick}>
            <img src={pic[i].thumb} alt="Gallery" className="grid-image" id={`${pic[i].id.toString()}`}/> 
          </div> 
        </div>
      </Link>
    )
  }
}

GridTile.propTypes = {
  data: PropTypes.array,
  index: PropTypes.number
}

export default GridTile;