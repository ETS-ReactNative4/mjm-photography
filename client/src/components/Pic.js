import React from 'react'
import '../css/App.css'

let currentPic;

const Pic = (props) => {
    
  window.scrollTo(0, 0);

  if (props.images) {
    currentPic = props.images.filter(pic => pic.id === Number(props.match.params.id))

    setTimeout(() => {
      document.getElementById("full-image-div").classList.remove("hidden")
    }, 150);
    
  }

  const handleClick = () => {
    props.history.goBack()
  }

  if (props.images){
    return (
    
      <div id="full-image-div" className="full-image-div hidden">
        <div className="full-image-item">
          <div className="image-info">
            <div className="arrow-div" onClick={handleClick}>
              <i className="fal fa-chevron-left back-arrow" ></i>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;{`${currentPic[0].year}  -  `} {`${currentPic[0].location}  -  `}{currentPic[0].format}
          </div>
          <img src={`/img/mjm_ - ${props.match.params.id}.jpg`} alt="full" className="single-image" />
        </div>
      </div>
    )
  } else {
    return <div />
  }
}

export default Pic;

