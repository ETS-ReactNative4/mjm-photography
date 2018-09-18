import React, { Component } from 'react';
import '../css/App.css'
import PropTypes from 'prop-types';
import GridSpinner from './GridSpinner'


let zoomView, mainView

class Pic extends Component {

  constructor(props){
    super(props)
    this.state = {
      showMain: false,
      currentPic: this.props.images.filter(pic => pic.id === Number(this.props.match.params.id))
    }
  }

  componentDidMount = () => {
    zoomView = document.getElementById("zoomed-image-div")
    mainView = document.getElementById("full-image-div")
    window.scrollTo(0, 0);    
  }

   checkImgLoad = ( e ) => {
     const img = e.target
     const imgSize = {
       x: img.width, 
       y: img.height
     }
     console.log(imgSize)
     setTimeout(() => {
       this.setState({showMain: true})
       mainView.classList.add("show")
     }, 100);
   }

   handleClick = () => {
     this.props.history.goBack()
   }

   handleImageClick = () => {
     zoomView.classList.toggle("show")
     mainView.classList.toggle("show")
   }

   render() {
     
     return (
       <div className="full-main-view">
         <GridSpinner spinnerSize="50px" />
         <div id="full-image-div" className="full-image-div">
           <div className="full-image-item">
             <div className="image-info" id="image-info">
               <div className="arrow-div" onClick={this.handleClick}>
                 <i className="fal fa-chevron-left back-arrow"></i>
               </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
               {`${this.state.currentPic[0].year}  -  `} {`${this.state.currentPic[0].location}  -  `}{this.state.currentPic[0].format}
             </div>
             <div className="just-image-div">
               <img src={`/img/mjm_ - ${this.props.match.params.id}.jpg`} alt="full" 
                 className="single-image" onLoad={this.checkImgLoad}
                 onClick={this.handleImageClick} />
             </div>
           </div>
         </div>
         <div className="zoomed-image-div" id="zoomed-image-div">
           <div className="zoomed-image-wrapper">
             <img src={`/img/mjm_ - ${this.props.match.params.id}.jpg`} alt="" className="zommed-image" id="zommed-image"
               onClick={this.handleImageClick} />
           </div>
         </div>
       </div>
     )
   }
}

Pic.propTypes = {
  images: PropTypes.array,
  match: PropTypes.object
}

export default Pic;

