import React, { Component } from 'react'
import '../css/App.css'
import {Link} from "react-router-dom";
import state from "../state"


class  Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      pics: state.pictures
    }
  }

  getHeight = (el) => {
    setTimeout(() => {
      const img = document.getElementById(el)
      const height = Math.ceil(img.height / 10)
      console.log(height);
      img.style.height = `${height * 10 -10}px`
      console.log(img.style.height);   
      img.style.gridRow = `span ${height}` // need to compensate for grid gaps
    }, 300);
  }
  
  render() {
    return (
      <div className="pic-grid">
        {this.state.pics.map(pic => 
          // <Link to={`/picture/${pic.id}`} key={pic.id}>
          <img src={pic.thumb} className="grid-pic" alt="" 
            id={`thumb-${pic.id.toString()}`} 
            onLoad={this.getHeight(`thumb-${pic.id.toString()}`)} 
            key={pic.id} />
          // </Link>
        )}
      </div>
    )
  }
}

export default Grid;