import React from 'react'
import '../css/App.css'
import PropTypes from 'prop-types';


const checkImgLoad = () => {
  setTimeout(() => {
    document.getElementById("full-image-div").classList.add("show")
  }, 100);
}

const Pic = (props) => {

  let currentPic;
  window.scrollTo(0, 0);

  if (props.images) {
    currentPic = props.images.filter(pic => pic.id === Number(props.match.params.id))
  }

  if (props.images){
    return (
      <div id="full-image-div" className="full-image-div">
        <div className="full-image-item">
          <div className="image-info" id="image-info">
            <div className="arrow-div" onClick={props.history.goBack}>
              <i className="fal fa-chevron-left back-arrow" ></i>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;

            {`${currentPic[0].year}  -  `} {`${currentPic[0].location}  -  `}{currentPic[0].format}

          </div>
          <img src={`/img/mjm_ - ${props.match.params.id}.jpg`} alt="full" className="single-image" onLoad={checkImgLoad()}/>
        </div>
      </div>
    )
  } else {
    return <div />
  }
}

Pic.propTypes = {
  images: PropTypes.array,
  match: PropTypes.object
}


export default Pic;

