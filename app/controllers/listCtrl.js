'use strict';

app.controller("ListCtrl", ($scope, DatabaseFactory ) => {
  $scope.list = [];




   $scope.getResult = () => {
      DatabaseFactory.getListFromFirebase()
      .then( (searchObj) => {
        $scope.item = searchObj;
      });
    };





 });
