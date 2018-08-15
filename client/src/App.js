import React, { Component } from 'react';
import state from './state'
import jss from 'jss'
import preset from 'jss-preset-default'
import './css/App.css'
import Aside from './components/Aside'
import GridList from './components/GridList'
import Header from './components/Header'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Pic from './components/Pic'
import Info from './components/Info'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()


jss.setup(preset())

class App extends Component {

  constructor (props){
    super(props)
    this.state = {
      imgsLoaded: false,
      imgsJson: state.pictures
      
    }
  }

  componentDidMount () {
    // try {
    //   const response = await fetch("https://mjm-photo-server.herokuapp.com/pictures");
    //   const json = await response.json();    
    //   this.setState({
    //     fetchDone: true,
    //     imgsJson: json,
    //   })
    //   // this.getimageList();
    //   const pathArr = []
    //   this.state.imgsJson.forEach((img) => 
    //   {pathArr.push(img.thumb)
    //     pathArr.push(img.full)})
    //   this.loadImg(pathArr)
    // } catch (error) {
    //   console.log(error);
    //   document.getElementById("error-div").innerHTML = error
    // }
    history.listen((location, action) => {
      console.log(location, action); 
    })   

  }

   checkImage = path =>
     new Promise(resolve => {
       const img = new Image();
       img.onload = () => resolve({path, status: 'ok'});
       img.onerror = () => resolve({path, status: 'error'});

       img.src = path;
       //  console.log(status);
       
     });

     loadImg = (paths) => {Promise.all(paths.map(this.checkImage))
       console.log("done");
     }

     



  getimageList = () => {
    this.state.imgsJson.forEach((img) => {
      const thumbImg = new Image();
      thumbImg.src = (img.thumb);
      document.getElementById("preLoad-image-div").appendChild(thumbImg);
      const fullImg = new Image();
      fullImg.src = (img.full);
      document.getElementById("preLoad-image-div").appendChild(fullImg);


      // const preImgThumb = document.createElement('img')
      // preImgThumb.src = img.thumb
      // preLoadDiv.push(preImgThumb)
      // const preImg = document.createElement('img')
      // preImg.src = img.full
      // preLoadDiv.push(preImg)
     

    })

    this.setState({imgsLoaded: true})
    // console.table(preLoadDiv);
    
  }

   
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
         
          <Aside />
          

          <div className="content">
            <Header />
            
            <div id="preLoad-image-div"></div>
            <div id="error-div">
            </div>
            

            <Switch {...this.props}>
              <Route exact path="/picture/:id" render={(props) => <Pic {...props} images={this.state.imgsJson} />}/>
              {/* <Route exact path="picture/:id" component={Pic} /> */}
              <Route exact path="/info" component={Info} />
              {/* <Route path="/" component={GridList} /> */}
              <Route path="/" render={(props) => <GridList {...props} images={this.state.imgsJson} loaded={this.state.imgsLoaded}/>}/>
            </Switch>

          </div>
        </div>
      </BrowserRouter>

    );
  

  
  }
}

export default App;
