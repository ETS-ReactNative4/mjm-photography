import {combineReducers} from "redux";


function imgsLoaded(state = false, action) {
  if (action.type === "LOADED") {
    return action.value;
  }
  return state;
}

function pictures(state = [], action) {
  return state;
}


const rootReducer = combineReducers({
  imgsLoaded, pictures
});

export default rootReducer;
