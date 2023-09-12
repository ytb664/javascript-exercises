const convertToCelsius = function(theFahrenheit) {

  const x = theFahrenheit;

  let result = (x - 32) * (5 / 9);
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(theCelsius) {

  const x = theCelsius;

  let result = (x * (9 / 5) + 32);
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
