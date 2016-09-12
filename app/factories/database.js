"use strict";

app.factory("DatabaseFactory", function($q, $http, FirebaseURL) {

  let List = []



 let getListFromFirebase = () => {
    let pinsArray = []
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}arrangements.json`)
    .success((listObj) => {
      resolve(listArray)
      console.log("listArray", listArray)
    })
    .error((error) => {
      reject(error)
      })
    })
  }



return {getListFromFirebase};

});
