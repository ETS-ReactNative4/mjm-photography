import React, { Component } from 'react'
import '../css/App.css'
import GridTile from './GridTile';


class GridList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount = () => {
    if(this.props.images){
      this.setState({
        isLoaded: true
      })
    }
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.images !== prevProps.images){
      this.setState({
        isLoaded: true
      })
      
    }
    setTimeout(() => {
      document.getElementById("container").classList.remove("hidden")
    }, 300);
  }

  render() {
    if (this.state.isLoaded){
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