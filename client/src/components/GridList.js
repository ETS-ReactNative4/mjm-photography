import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile';




class GridList extends Component {

componentDidMount = () => {
  setTimeout(() => {
    document.getElementById("container").classList.remove("hidden")
  }, 100);
}


render() {


  if (this.props.images){
    return (
      <div id="container" className="main-grid container hidden">
        {this.props.images.map((item, i) => <GridTile data={this.props.images} index={i} key={item.id}/>)}
      </div>
    )
  } else {
    return <div>Hold up...</div>
  }
}
}

export default GridList;