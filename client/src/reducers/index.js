import {combineReducers} from "redux";

function images(state = [], action) {
  if (action.type === "FULLDATA_LOADED") {
    return action.value;
  }
  return state;
}

// function favorites(state = [], action) {
//   if (action.type === "FAVORITES_LOADED") {
//     return action.value;
//   }
//   return state;
// }



const rootReducer = combineReducers({
  images
});

export default rootReducer;
