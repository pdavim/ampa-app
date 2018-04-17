var tempature_c, tempature_f, humidity, fellslike_c, feelslike_f, wind, state, city, country, icon;

$(document).ready(function() {
  var api = 'https://freegeoip.net/json/';
  $.getJSON(api, function(data) {
    city = data.region_name;
    country = data.country_name;
    var latitude = data.latitude;
    var longitude = data.longitude;
    $.getJSON('https://api.apixu.com/v1/current.json?key=f739f8dfed0d424aa62223307172006&q=' + city,
      function(data2) {
        tempature_c = data2.current.temp_c;
        tempature_f = data2.current.temp_f;
        humidity = data2.current.humidity;
        fellslike_c = data2.current.feelslike_c;
        feelslike_f = data2.current.feelslike_f;
        wind = data2.current.wind_degree;
        state = data2.current.condition.text;
        icon = data2.current.condition.icon;
        $("#tempature_c").html("tempature: " + tempature_c + "\u2103");
        //for change fahreneith to celcius
        var click = 0;
        $("#state").click(function() {
          click++;
          console.log(click);
          if (click % 2 === 1) {
            $("#tempature_c").html("tempature: " + tempature_f + "\u2109");
            $("#fellslike_c").html("feelslike:" + feelslike_f + "\u2109");
          } else
            $("#tempature_c").html("tempature: " + tempature_c + "\u2103");
          $("#fellslike_c").html("feelslike:" + fellslike_c + "\u2103");
        });
        //

        $("#humidity").html("humidity: " + humidity);
        $("#wind").html("wind:" + wind);
        $("#state").html(state);
        $("#icon").attr("src", icon);
        $("#tempature_f").html("tempature: " + tempature_f + "\u2109");
        $("#fellslike_c").html("feelslike:" + fellslike_c + "\u2103");
        $("#country").html(country + " " + city);



      });

  });
});
