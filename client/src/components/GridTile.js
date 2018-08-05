import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/App.css'

class GridTile extends Component {


  handleClick = (e) => {
    console.log(e.target.id);
  }

  render() {

    
    const pic = this.props.data
    const i = this.props.index

    return (
      <div className="item-main start-flex-col">
        <div className={`item item-${pic[i].id}`} onClick={this.handleClick}>
          <div className="loading-div">
            <i className="fal fa-spinner-third grid-tile-spinner"></i>
            {/* <i className="fal fa-spinner "></i> */}
          </div>
          <img src={pic[i].url} alt="Gallery" className="grid-image" id={`grid-image-${pic[i].id.toString()}`}/> </div> 
        <span className="image-info">{pic[i].year} {pic[i].location}</span>
      </div>
    )
  }
}

GridTile.propTypes = {
  data: PropTypes.array,
  index: PropTypes.number
}

export default GridTile;