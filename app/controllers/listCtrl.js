'use strict';

app.controller("ListCtrl", function($scope, DatabaseFactory){



      console.log("list controller");

   // $scope.getResult = () => {
      DatabaseFactory.getListFromFirebase()
      .then( (searchObj) => {
        $scope.lists = searchObj;
      console.log("searchObj", searchObj);
      });
    // };





 });
