import React, { Component } from 'react';
import './css/App.css';
import GridTile from './components/GridTile.js';//****Change to container if using */
import { BrowserRouter, Route, Switch } from "react-router-dom";



const arr = ["item", "item", "item", "item", "item"]

class App extends Component {

  handleClick = (e) => {
    console.log(e.target.id);
  }
  
  render() {
    return (
      <div className="App">
        <aside className="aside">
      Mike Mitchell
        </aside>
        <div className="main-grid container">
          {arr.map((item, i) => <div className={`item item-${i+1}`} key={i} id={i+1} onClick={this.handleClick}> <img src="http://via.placeholder.com/500x350" alt="" className="grid-image"/> </div> )}
        </div>
      </div>
    );
  }
}

export default App;
