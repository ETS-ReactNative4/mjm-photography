import React, { Component } from 'react';
import '../css/App.css'
import PropTypes from 'prop-types';
import GridSpinner from './GridSpinner'

class Pic extends Component {

  constructor(props){
    super(props)
    this.state = {
      showMain: false,
      currentPic: this.props.images.filter(pic => pic.id === Number(this.props.match.params.id))
    }
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);    
  }

   checkImgLoad = () => {
     setTimeout(() => {
       this.setState({showMain: true})
       document.getElementById("full-image-div").classList.add("show")
     }, 300);
   }

   handleClick = () => {
     this.props.history.goBack()
   }

   render() {
     if (this.props.images){
       return (
         <div>
           <GridSpinner timeout={400} />
           <div id="full-image-div" className="full-image-div">
             <div className="full-image-item">
               <div className="image-info" id="image-info">
                 <div className="arrow-div" onClick={this.handleClick}>
                   <i className="fal fa-chevron-left back-arrow" ></i>
                 </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                 {`${this.state.currentPic[0].year}  -  `} {`${this.state.currentPic[0].location}  -  `}{this.state.currentPic[0].format}
               </div>
               <img src={`/img/mjm_ - ${this.props.match.params.id}.jpg`} alt="full" className="single-image" onLoad={this.checkImgLoad}/>
             </div>
           </div>
         </div>
       )
     } else {
       return <GridSpinner timeout={400} />
     }
   }
}

Pic.propTypes = {
  images: PropTypes.array,
  match: PropTypes.object
}

export default Pic;

