<!DOCTYPE html>
<html>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script>
console.log("hello");
  for( var i=0; i<20; i++){
    $.ajax("https:eune.api.pvp.net/api/lol/eune/v1.2/champion/57"+i+"?api_key=0195140c-442e-47a9-ad8b-1c9691befc4c")
    .done(function(data){
      document.innerHTML= document.innerHTML + data;
    })
  }
</script>


</body>
</html>
