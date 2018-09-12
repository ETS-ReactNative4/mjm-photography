
import App from "./App";
import { connect } from "react-redux";
// import { loaded } from "./actions";

function mapStateToProps(state) {
  return {
    imgsLoaded: state.imgsLoaded,
    pictures: state.pictures
  };
}
  
// function mapDispatchToProps(dispatch) {
//   return {
//     loaded: (bool) => {
//       const action = loaded(bool);
//       dispatch(action);
//     },
//   };
// }

export default connect(mapStateToProps,null)(App);