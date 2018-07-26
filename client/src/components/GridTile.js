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
      <div className="item-main">
        <div className={`item item-${pic[i].id} basic-flex-col`}  onClick={this.handleClick}> 
          <img src={pic[i].url} alt="Gallery" className="grid-image" id={pic[i].id.toString()}/> </div> 
        <span className="info">{pic[i].year} {pic[i].location}</span>
      </div>
    )
  }
}

GridTile.propTypes = {
  data: PropTypes.array,
  index: PropTypes.number
}

export default GridTile;