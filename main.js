$("button").click(function (){



var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  function hola (){
       var urla = 'http://api.openweathermap.org/data/2.5/weather?lat='+crd.latitude+'&lon='+crd.longitude+'&units=metric&appid=c435775454b539f2dec5a3097b55e264'
        $.ajax({url: urla, success: function(result){
            console.log(result);
            var country = document.getElementById("country");
            country.innerHTML = result.sys.country + ', ' + result.name;
            var temp = document.getElementById('temp');
            temp.innerHTML = Math.round(result.main.temp) + '<a href="#" onclick="celcius('+result.main.temp+')"> °C</span>';
            var image = document.getElementById('image');
            image.src = 'http://openweathermap.org/img/w/'+result.weather[0].icon+'.png';
        }})};
  hola();

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);


celcius = function (c) {
var f = Math.round(c * 9/5 + 32);
temp.innerHTML = f + '<a href="#" onclick="fahrenheit('+f+')"> °F</span>';
};

fahrenheit = function (f) {
var c = Math.round((f -32) * 5/9);
temp.innerHTML = c +'<a href="#" onclick="celcius('+c+')"> °C</span>'
};


 });




 




