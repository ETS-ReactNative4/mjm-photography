import {combineReducers} from "redux";

function pictures(state = [], action) {
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
  pictures
});

export default rootReducer;
