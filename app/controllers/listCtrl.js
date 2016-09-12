'use strict';

app.controller("ListCtrl", ($scope, DatabaseFactory ) => {




   $scope.getResult = () => {
      DatabaseFactory.getListFromFirebase()
      .then( (searchObj) => {
        $scope.lists = searchObj;
      console.log("searchObj", searchObj);
      });
    };





 });
