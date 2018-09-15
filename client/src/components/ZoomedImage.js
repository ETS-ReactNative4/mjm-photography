import React, { Component } from 'react'
import state from "../state";

class ZoomedImage extends Component {
  render() {
    const pictures = state.pictures
   
    return (
      <div style={{height: "100vh"}}>
        {pictures.map(pic => 
          <img src={pic.full}  style={{maxWidth: '200px', margin: '6px'}} alt=""/>
          
        )}
      </div>
    )
  }
}

export default ZoomedImage;