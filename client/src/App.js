import React, { Component } from 'react';
import './css/App.css'
// import Spinner from './components/Spinner'
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
      imgsLoaded: true,
      images: this.props.pictures
    }
  }

  componentDidMount () {
    // setTimeout(() => {
    //   console.log(this.props)
    // }, 2000);
    
    history.listen((location, action) => {
    })

    // if(this.props.imgsLoaded) {
    //   setTimeout(() => {
    //     this.setState({imgsLoaded: true})
    //   }, 1800);
    // }
  }

  // componentWillReceiveProps = () => {
  //   if(this.props.imgsLoaded){
  //     setTimeout(() => {
  //       this.setState({imgsLoaded: true})
  //     }, 1800);
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Aside />
          <div className="content">        
            <Switch {...this.props}>
              <Route exact path="/picture/:id" 
                render={(props) => <Pic {...props} images={this.state.images} />}/>
              <Route exact path="/info" component={Info} />
              <Route path="/" render={(props) => <GridList {...props}
                images={this.state.images}/>}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

