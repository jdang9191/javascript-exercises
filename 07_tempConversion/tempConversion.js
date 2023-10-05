const convertToCelsius = function(temp) {
    let celcius = (temp-32) * (5/9)
    celcius = Math.round(celcius * 10)/10

    return celcius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = temp *(9/5) + 32
  fahrenheit = Math.round(fahrenheit * 10)/10

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
