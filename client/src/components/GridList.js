import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile'
// import Spinner from './Spinner'


class GridList extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
      isLoaded: false,
    }
  }

  // componentDidMount = () => {
  //   const that = this
  //   if(!this.state.isLoaded){
  //     window.addEventListener("load", function(){
  //       console.log("loaded");
  //       that.setState({imgsLoaded: true})
  //       setTimeout(() => {
  //         document.getElementById("container").classList.remove("hidden")
  //       }, 300);
        
  //     })
   
  //   }
  // }

  // getimageList = () => {
  //   if(this.props.images){
  //     this.props.images.forEach((img) => {
  //       console.log("loop");
        
  //       const preImgThumb = document.createElement('img')
  //       const preImg = document.createElement('img')
  //       preImgThumb.src = img.thumb
  //       preImg.src = img.full
  //     })
  //     console.log("done");
  //     document.getElementById("container").classList.remove("hidden")
  //   }
  // }

  // componentDidUpdate = (prevProps) => {
  //   if(this.props.images !== prevProps.images){
  //     document.getElementById("container").classList.remove("hidden")
  //   }
  // }



  

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

export default GridList;