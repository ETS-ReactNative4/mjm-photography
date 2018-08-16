import React, { Component } from 'react';
import state from './state'
// import jss from 'jss'
// import preset from 'jss-preset-default'
import './css/App.css'
import Spinner from './components/Spinner'
import Aside from './components/Aside'
import GridList from './components/GridList'
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Pic from './components/Pic'
import Info from './components/Info'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      imgsLoaded: false,
      imgsJson: state.pictures,
      counter: 0
    }
  }

  componentDidMount () {
    history.listen((location, action) => {
    })   
  }
     
  loadImgages = () => {
    this.setState({ counter: this.state.counter + 1})
    if (this.state.counter === this.state.imgsJson.length - 1) {
      setTimeout(() => {
        this.setState({imgsLoaded: true})
      }, 2300);
    }
  }

   
  render() {
    if (this.state.imgsLoaded) {
      return (
        <BrowserRouter>
          <div className="App">
            <Aside />
            <div className="content">
              <Header />
              <Switch {...this.props}>
                <Route exact path="/picture/:id" 
                  render={(props) => <Pic {...props} images={this.state.imgsJson} />}/>
                <Route exact path="/info" component={Info} />
                <Route path="/" render={(props) => <GridList {...props} 
                  images={this.state.imgsJson} 
                  loaded={this.state.imgsLoaded}/>}/>
              </Switch>

            </div>
          </div>
        </BrowserRouter>
      )
    } else {
      return (
        <div>
          <div style={{display: "none"}} onLoad={this.loadImgages}>
            {this.state.imgsJson.map(img => <img src={img.thumb} alt="" key={img.id} />)}
            {this.state.imgsJson.map(img => <img src={img.full}  alt="" key={img.full} />)}
          </div>
          
          <Spinner />
        </div>
      )
    }
  }
}

export default App;
