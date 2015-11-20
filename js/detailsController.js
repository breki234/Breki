App.controller('detailsController',['$scope', 'championlist', '$routeParams', function($scope, championlist, $routeParams) {
		// create a message to display in our view
    console.log(championlist.data);
    championlist.success(function(data){
      console.log(data);
      $scope.champion = data.data[$routeParams.id];
    })

	}]);
