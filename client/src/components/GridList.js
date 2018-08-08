import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile'
import Spinner from './Spinner'


class GridList extends Component {
  constructor(props) {
    
    super(props)
    // this.state = {
    //   isLoaded: false
    // }
  }

  componentDidMount = () => {
 
  }

  getimageList = () => {
    if(this.props.images){
      this.props.images.forEach((img) => {
        console.log("loop");
        
        const preImgThumb = document.createElement('img')
        const preImg = document.createElement('img')
        preImgThumb.src = img.thumb
        preImg.src = img.full
      })
      console.log("done");
      document.getElementById("container").classList.remove("hidden")
    }
  }

  // componentDidUpdate = (prevProps) => {
  //   if(this.props.images !== prevProps.images){
  //     document.getElementById("container").classList.remove("hidden")
  //   }
  // }


  // countImgs = (i) => {
    
  //   if(i === this.props.images.length - 1){
  //     console.log(i, this.props.images.length);
  //     // setTimeout(() => {
  //     //   document.getElementById("container").classList.remove("hidden")
  //     // }, 100);
  //   } 
  // }
  

  render() {
    if (this.props.images){
      return (
        <div id="container" className="main-grid container hidden">
          {this.props.images.map((item, i) => <GridTile data={this.props.images} index={i} key={item.id} />)}
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}

export default GridList;