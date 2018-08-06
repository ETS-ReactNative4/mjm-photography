import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile';

class GridList extends Component {
  render() {
    if (this.props.images){
      return (
        <div className="main-grid container">
          {this.props.images.map((item, i) => <GridTile data={this.props.images} index={i} key={item.id}/>)}
        </div>
      )
    } else {
      return <div />
    }
  }
}

export default GridList;