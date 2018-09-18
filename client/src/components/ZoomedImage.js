// import React, { Component } from 'react'
// import state from "../state";

// class ZoomedImage extends Component {

//   componentDidMount = () => {
//     const testImg = document.getElementById('test-image')
//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset < 40){
//         testImg.style.top = `${100 + window.pageYOffset * 4}px`
//         testImg.style.left = `${100 + window.pageYOffset}px`
//       }
//     })
//   }




//   render() {
//     const pictures = state.pictures

   
//     return (
//       <div style={{height: "100vh"}}>
 
//         <img src="/img/mjm_ - 1.jpg" 
//           id="test-image" 
//           style={{
//             maxWidth: '200px',
//             margin: '6px', 
//             position: 'absolute',
//             top: "100",
//             left: "100"}} 
//           alt=""/>
//       </div>
//     )
//   }
// }

// export default ZoomedImage;