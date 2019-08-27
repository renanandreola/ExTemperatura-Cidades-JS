function send(event) {
  event.preventDefault();

  var city = $("#city").val();
  var country = $("#country").val();

  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+","
  +country+"&appid=1136291543d398fff86ff109cf09ce1f", function(dados) {
        console.log(dados.main.temp_max);
        console.log(dados.main.temp_min);
        console.log(dados.main.pressure);
        console.log(dados.main.humidity);

        if ($("#celsius").prop("checked") === true) {
          $("#result").html("Hoje em "+city+", "+country+"</br>"+
          "Pressão atmosférica: "+ dados.main.pressure+"hpa"+"</br>"+
          "Umidade do ar: "+dados.main.humidity+"%"+"</br>"+
          "Temperatura Máx: "+ Math.round(dados.main.temp_max - 273.15) +"</br>"+
          "Temperatura Min: "+ Math.round(dados.main.temp_min - 273.15));
        }
    });
};



//Fahrenheit:
//(0 K − 273,15) × 9/5 + 32 = -459,7 °F

//celsius:
//0 K − 273,15 = -273,1 °C
