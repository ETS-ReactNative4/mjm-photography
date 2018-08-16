import React from 'react'
import '../css/App.css'
import { Link } from "react-router-dom";


const checkImgLoad = () => {
  setTimeout(() => {
    document.getElementById("image-info").classList.add("show")
  }, 400);
}

const Pic = (props) => {

  let currentPic;
  window.scrollTo(0, 0);

  if (props.images) {
    currentPic = props.images.filter(pic => pic.id === Number(props.match.params.id))
  }

  const handleClick = () => {
    props.history.goBack()
  }

  if (props.images){
    return (
      <div id="full-image-div" className="full-image-div">
        <div className="full-image-item">
          <div className="image-info" id="image-info">
            <Link to="/">
              <div className="arrow-div" onClick={handleClick}>
                <i className="fal fa-chevron-left back-arrow" ></i>
              </div>
            </Link>

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

export default Pic;

