App.factory('championlist', function($http) {
  var url = "https://eune.api.pvp.net/api/lol/eune/v1.2/champion?api_key=0195140c-442e-47a9-ad8b-1c9691befc4c";
  var data = $http.get(url);
  var data2 = [];
  for(i=0; i<data.champions.length; i++){
    var url2 = "https://eune.api.pvp.net/api/lol/static-data/eune/v1.2/champion/"+ data.champions[i].id +"?api_key=0195140c-442e-47a9-ad8b-1c9691befc4c";
    data2.push($http.get(url2));
  }

  return data2;
}
