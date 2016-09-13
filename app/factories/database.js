"use strict";

app.factory("DatabaseFactory", function($q, $http) {

  // let listArray = []



 let getListFromFirebase = () => {
    return $q((resolve, reject) => {
      $http.get(`https://flower-power-angular.firebaseio.com/arrangements.json`)
    .success((listObj) => {
      resolve(listObj);
      console.log("listObj", listObj);
    })
    .error((error) => {
      reject(error);
      });
    });
  };



return {getListFromFirebase};

});
