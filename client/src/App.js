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
      const that = this
      if(!this.state.isLoaded){
        window.addEventListener("load", function(){
          console.log("loaded");
          
          that.setState({imgsLoaded: true})
          document.getElementById("container").classList.remove("hidden")
        })
     
      }
      // this.getimageList();
    } catch (error) {
      console.log(error);
    }
    history.listen((location, action) => {
      // console.log(location, action);
        
    })   

    
  }

  // getimageList = () => {
  //   this.state.imgsJson.forEach((img) => {
  //     const preImgThumb = document.createElement('img')
  //     const preImg = document.createElement('img')
  //     preImgThumb.src = img.thumb
  //     preImg.src = img.full
  //   })
  //   this.setState({imgsLoaded: true})
  //   console.log("done");
    
  // }

   
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
         
          <Aside />
          

          <div className="content">
            <Header />
            

          
            

            <Switch {...this.props}>
              <Route exact path="/picture/:id" render={(props) => <Pic {...props} images={this.state.imgsJson} />}/>
              <Route exact path="/info" component={Info} />
              <Route path="/" render={(props) => <GridList {...props} images={this.state.imgsJson} loaded={this.state.imgsLoaded}/>}/>
            </Switch>

          </div>
        </div>
      </BrowserRouter>

    );
  

  
  }
}

export default App;
