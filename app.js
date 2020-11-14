(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  //Initiate the variables for null
  $scope.lunchinput="";
  $scope.message="";
  //Create the function that checks if its too much or not
  $scope.CheckIfTooMuch = function () {
  //Take the value from the input text
  var lunchinput=$scope.lunchinput;
  //Split the value entered in the input file when , is found
  var numberOfItems = lunchinput.split(',');
 //Loop each item in the list
  numberOfItems.forEach((item, i) => {
    console.log(i);
    if (lunchinput =="" ) {
        console.log('Please insert data!');
        $scope.message="Please insert data!";
    }
    else if (i<2) {
      console.log('Enjoy!');
        $scope.message="Enjoy!";
    }else if (i>2) {
      console.log('Too Much!');
      $scope.message="Too Much!";
    }
  });
  };
}
})();
