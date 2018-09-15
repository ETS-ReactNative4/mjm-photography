
      
export function loaded(bool) {
  return {
    type: "LOADED",
    value: bool
  };
}

export function setWinSize(obj) {
  return {
    type: "SET_WINSIZE",
    value: obj
  };
}

export function setScroll(num) {
  return {
    type: "SET_SCROLL",
    value: num
  };
}


// export function loadFavorites() {
//   return function (dispatch) {
//     fetch("https://mjm-cocktail-app.herokuapp.com/favorites").then( (response) => {
//       return response.json();
//     }).then((favorites) => {
//       dispatch(favoritesLoaded(favorites));
//     });
//   };
// }
      
// export function favoritesLoaded(favorites) {
//   return {
//     type: "FAVORITES_LOADED",
//     value: favorites
//   };
// }

// export function showUser(id) {
//   return function (dispatch) {
//     fetch("/user/" + id).then((response) => {
//       return response.json();
//     }).then(() => {
//       dispatch(loadUsers());
//     });
//   };
// }
  
  
// export function addFav(fav) {
//   return function (dispatch) {
//     fetch("https://mjm-cocktail-app.herokuapp.com/favorite", {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(fav)
//     }).then(() => {
//       dispatch(loadFavorites());
//     });
//   };
// }


      
// export function deleteFav(id) {
//   return function (dispatch) {
//     fetch("https://mjm-cocktail-app.herokuapp.com/favorite/" + id, {
//       method: "DELETE"
//     }).then(res => res.json())
//       .then(() => {
//         dispatch(loadFavorites());
//       });
//   };
// }

// export function addDrink(data) {
//   return function (dispatch) {
//     fetch("https://mjm-cocktail-app.herokuapp.com/postDrink", {
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(data)
//     }).then(() => {
//       dispatch(loadFullData());
//     });
//   };
// }
