import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile'
// import Spinner from './Spinner'


class GridList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  // componentDidMount = () => {
  //   console.log("mount");
  //   if(this.props.images){
      
  //     this.preLoad()
  //   }
  // }

  componentDidUpdate = (prevProps) => {
    if(this.props.images !== prevProps.images){
      this.preLoad()
    }
  }

    preLoad = () => {
      this.props.images.forEach((img) => {
        const preImg = document.createElement('img');
        preImg.src = img.thumb; // Assigning the img src immediately requests the image
        console.log("done");
      
      })
      this.setState({
        isLoaded: true
      })
      setTimeout(() => {
        // document.getElementById("loading-div").classList.add("hidden")
        document.getElementById("container").classList.remove("hidden")
        
      }, 1000);
    }
  

    render() {
      if (this.state.isLoaded){
        return (
          <div id="container" className="main-grid container hidden">
            {this.props.images.map((item, i) => <GridTile data={this.props.images} index={i} key={item.id}/>)}
          </div>
        )
      } else {
        return (
          <div id="loading-div">
            <div className="spinner-div">
              <i className="fal fa-spinner-third grid-tile-spinner"></i>
              {/* <i className="fal fa-spinner "></i> */}
            </div>
          </div>
        )
      }
    }
}

export default GridList;