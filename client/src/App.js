import React, { Component } from 'react';
import './css/App.css'
// import ZoomedImage from './components/ZoomedImage'
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
      images: this.props.pictures
    }
  }

  componentDidMount () {
    history.listen((location, action) => {
    })
    window.addEventListener('resize', this.logSize)
    window.addEventListener('scroll', this.scrollPosition)
    this.logSize()
    this.scrollPosition()
  }

  logSize = () => {
    const size = {width: window.innerWidth, height: window.innerHeight}
    this.props.setWinSize(size)
  }

  scrollPosition = () => {
    const scrollPoint = window.scrollY
    this.props.setScroll(scrollPoint)
  }


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
              {/* <Route exact path="/test" component={ZoomedImage} /> */}
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

