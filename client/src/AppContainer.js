
import App from "./App";
import { connect } from "react-redux";
import { setWinSize, setScroll } from "./actions";

function mapStateToProps(state) {
  return {
    imgsLoaded: state.imgsLoaded,
    pictures: state.pictures,
    // scrollPos: state.scrollPos,
    // winSize: state.winSize
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    setWinSize: (obj) => {
      const action = setWinSize(obj);
      dispatch(action);
    },
    setScroll: (num) => {
      const action = setScroll(num);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);