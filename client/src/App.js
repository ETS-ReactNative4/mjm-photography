import React, { Component } from 'react';
import './css/App.css';
import GridTile from './components/GridTile.js';//****Change to container if using */
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import state from "./state.js"


class App extends Component {

  constructor (props){
    super(props)

    this.state = {
      images: state.images
    }
  }
  
  render() {
    return (
      <div className="App">
        <aside className="aside">
      Mike Mitchell
        </aside>
        <div className="main-grid container">
          {this.state.images.map((item, i) => <GridTile data={this.state.images} index={i} key={item.id}/>)}
        </div>
      </div>
    );
  }
}

export default App;
