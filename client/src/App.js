import React, { Component } from 'react';
import './css/App.css';
import GridList from './components/GridList'
import Header from './components/Header'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Pic from './components/Pic';
import Info from './components/Info';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
class App extends Component {

  constructor (props){
    super(props)
    
    this.state = {
      isLoaded: false
    }
  }

  async componentDidMount () {
    try {
      const response = await fetch("https://mjm-photo-server.herokuapp.com/pictures");
      const json = await response.json();
      this.setState({
        isLoaded: true,
        images: json
      })
    } catch (error) {
      console.log(error);
    }
    history.listen((location, action) => {
      // console.log(location, action);
        
    })   
    setTimeout(() => {
      document.getElementById("loading-div").classList.add("hidden");
    }, 1000);
  }

   
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
         
          <aside className="aside">
            <nav className="nav-list basic-flex-col">

              <Link to="/">
                <div className="aside-icon-div"><i className="far fa-camera-retro aside-icon"></i>
                </div>
              </Link>

              <Link to="/info">
                <div className="aside-icon-div">
                  <i className="fal fa-info-circle aside-icon"></i>
                </div>
              </Link>
              
              <a href="https://www.instagram.com/mimitch/" target="_blank" rel='noopener noreferrer'>
                <div className="aside-icon-div"><i className="fab fa-instagram aside-icon"></i>
                </div> 
              </a>

              <a href="mailto:<mimitch@mac.com>">
                <div className="aside-icon-div"> <i className="fal fa-envelope aside-icon"></i>
                </div> 
              </a>

             
            </nav>
          </aside>
          
          <div className="content">
            <Header />
            <div id="loading-div">
              <div className="spinner-div">
                <i className="fal fa-spinner-third grid-tile-spinner"></i>
                {/* <i className="fal fa-spinner "></i> */}
              </div>
            </div>
            <Switch {...this.props}>
              <Route exact path="/picture/:id" render={(props) => <Pic {...props} images={this.state.images} />}/>
              {/* <Route path="/picture/:id" component={Pic} /> */}
              <Route exact path="/info" component={Info} />
              <Route path="/" render={(props) => <GridList {...props} images={this.state.images} />}/>
              {/* <Route path="*" component={GridList} /> */}
            </Switch>
          </div>
       
        </div>
      </BrowserRouter>
    );
  

  
  }
}

export default App;
