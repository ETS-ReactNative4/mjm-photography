import GridTile from "../components/GridTile";
import { connect } from "react-redux";
import { loaded } from "../actions";

function mapStateToProps(state) {
  return {
    imgsLoaded: state.imgsLoaded,
    winSize: state.winSize,
    scrollPos: state.scrollPos
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    loaded: (bool) => {
      const action = loaded(bool);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(GridTile);