import React, { Component } from 'react';
import './css/App.css'
import Aside from './components/Aside'
import GridList from './containers/GridListContainer'
import Header from './components/Header'
import GridSpinner from './components/GridSpinner'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Pic from './containers/PicContainer'
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
            <GridSpinner spinnerSize="50px" />   
            <Switch>
              {/* <Route exact path="/picture/:id" 
                render={(props) => <Pic {...props} images={this.state.images} />}/> */}
              <Route exact path="/picture/:id" component={Pic} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/" component={GridList} />
              {/* <Route path="/" render={(props) => <GridList {...props}
                images={this.state.images}/>}/> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

