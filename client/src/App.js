import React, { Component } from 'react';
import './css/App.css';
import GridList from './components/GridList'
import Header from './components/Header'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Pic from './components/Pic';
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
      const response = await fetch("http://localhost:3001/pictures");
      const json = await response.json();
      this.setState({
        isLoaded: true,
        images: json
      })
    } catch (error) {
      console.log(error);
    }
    history.listen((location, action) => {
      console.log(action);
        
    })      
  }

   
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
         
          <aside className="aside">
            <nav className="nav-list basic-flex-col">
              <Link to="/">PHOTOGRAPHY</Link>
              <div>INFORMATION</div>
            </nav>
          </aside>
          
          <div className="content">
            <Header />
            <Switch {...this.props}>
              <Route exact path="/picture/:id" render={(props) => <Pic {...props} images={this.state.images} />}/>
              {/* <Route path="/picture/:id" component={Pic} /> */}
              {/* <Route path="/" component={GridList} /> */}
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
