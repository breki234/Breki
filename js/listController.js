App.controller('listController',['$scope', 'championlist', function($scope, championlist) {
		// create a message to display in our view

    championlist.success(function(data){
      console.log(data);
      $scope.champions = data.data
    });
}]);
