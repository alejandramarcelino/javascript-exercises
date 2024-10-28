const convertToCelsius = function(farh) {
  tempInCelc = (farh - 32) * (5/9);
  return Math.round(tempInCelc * 10) / 10;
};

const convertToFahrenheit = function(celc) {
  tempInFarh = (celc * (9/5)) + 32;
  return Math.round(tempInFarh * 10) / 10;
};

//solution provided: defined each function using single return statement

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
