App.factory('championlist', function($http) {
  var url = "https://global.api.pvp.net/api/lol/static-data/eune/v1.2/champion?champData=all&api_key=0195140c-442e-47a9-ad8b-1c9691befc4c";
  return $http.get(url);
  
});
/*
  var deffered = $q.defer();
  var data = [];
  var championlist = {};

  championlist.async = function() {
    $http.get(url)
    .success(function (d) {
      data = d;
      deffered.resolve();
    });
    return deffered.promise;
  };
  championlist.data = function() {

    var data2 = [];
    for(i=0; i<data.champions.length; i++){
      var url2 = "https://eune.api.pvp.net/api/lol/static-data/eune/v1.2/champion/"+ data.champions[i].id +"?champData=image&api_key=0195140c-442e-47a9-ad8b-1c9691befc4c";
      data2.push($http.get(url2));
    }
console.log(data2);
    Mydata= data2;
    return data2;
      };

  return championlist;

})
*/
