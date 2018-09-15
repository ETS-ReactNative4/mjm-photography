import {combineReducers} from "redux";


function imgsLoaded(state = false, action) {
  if (action.type === "LOADED") {
    return action.value;
  }
  return state;
}

function winSize(state = {}, action) {
  if (action.type === "SET_WINSIZE") {
    return action.value;
  }
  return state;
}

function scrollPos(state = 0, action) {
  if (action.type === "SET_SCROLL") {
    return action.value;
  }
  return state;
}


function pictures(state = [], action) {
  return state;
}


const rootReducer = combineReducers({
  imgsLoaded, winSize, scrollPos, pictures
});

export default rootReducer;
