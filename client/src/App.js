import React, { Component } from 'react';
import './css/App.css';
import Aside from './components/Aside';
import GridList from './components/GridList'
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pic from './components/Pic';
import Info from './components/Info';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      fetchDone: false,
      imgList: [],
      imgsLoaded: false,
      imgsJson: null
    }
  }

  async componentDidMount () {
    try {
      const response = await fetch("https://mjm-photo-server.herokuapp.com/pictures");
      const json = await response.json();    
      this.setState({
        fetchDone: true,
        imgsJson: json,
      })
    } catch (error) {
      console.log(error);
    }
    history.listen((location, action) => {
      console.log(location, action);
        
    })   
    this.getimageList();
  }

  async getimageList () {
    const imageList = await document.getElementsByTagName('img')
    for(let i = 0; i < imageList.length; i++) {
      console.log(imageList[i].outerHTML, imageList.length)
    }
    if(imageList) {
      console.log("if statement");
      
      setTimeout(() => {
        document.getElementById("loading-div").classList.add("hidden")
      }, 300)
    }
  
  }

   
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
         
          <Aside />

          <div className="content">

            <Header />

            <div id="loading-div">
              <div className="spinner-div">
                <i className="fal fa-spinner-third grid-tile-spinner"></i>
                {/* <i className="fal fa-spinner "></i> */}
              </div>
            </div>

            <Switch {...this.props}>
              <Route exact path="/picture/:id" render={(props) => <Pic {...props} images={this.state.imgsJson} />}/>
              <Route exact path="/info" component={Info} />
              <Route path="/" render={(props) => <GridList {...props} images={this.state.imgsJson} />}/>
            </Switch>

          </div>
        </div>
      </BrowserRouter>

    );
  

  
  }
}

export default App;
