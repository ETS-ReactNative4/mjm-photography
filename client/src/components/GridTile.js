import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/App.css'
import {Link} from "react-router-dom";


class GridTile extends Component {

  checkImgLoad = (i) => {
    const imgList = document.getElementsByClassName("grid-image")
    if(i === this.props.images.length - 1){
      setTimeout(() => {
        for (let i = 0; i < imgList.length; i++) {
          imgList[i].classList.add("show")
        }
      }, 150);
    } 
  }

  render() {

    const pic = this.props.images
    const i = this.props.index

    return (
      <Link to={`/picture/${pic[i].id}`} key={pic.id} images={this.props.images}>
        <div className="item-main">
          <div className={`item item-${pic[i].id}`} onClick={this.handleClick}>
            <img src={pic[i].thumb} alt="Gallery" 
              className={'grid-image'} id={`${pic[i].id.toString()}`} onLoad={this.checkImgLoad(i)}/> 
          </div> 
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