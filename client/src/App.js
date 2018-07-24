import React, { Component } from 'react';
import './css/App.css';
import GridTile from './components/GridTile.js';//****Change to container if using */
import { BrowserRouter, Route, Switch } from "react-router-dom";



const arr = ["item", "item", "item", "item", "item"]

class App extends Component {
  render() {
    return (
      <div className="App main-grid container">
        {arr.map((item, i) => <div className={`item item-${i+1}`}>{item} {i+1}</div> )}
      </div>
    );
  }
}

export default App;
