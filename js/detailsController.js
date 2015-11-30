App.controller('detailsController',['$scope', 'championlist', '$routeParams', function($scope, championlist, $routeParams) {
		// create a message to display in our view
    console.log(championlist);
    championlist.success(function(data){
      console.log(data);
      try {
        document.getElementById('skin').href = "#/third/"+ $routeParams.id;
        document.getElementById('spells').href = "#/fifth/"+ $routeParams.id;
        document.getElementById('lore').href = "#/forth/"+ $routeParams.id;
        document.getElementById('story').innerHTML=data.data[$routeParams.id].lore;
      }
      catch(error){
        console.log(error);
      }
      $scope.champion = data.data[$routeParams.id];
    })

	}]);
