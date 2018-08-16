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