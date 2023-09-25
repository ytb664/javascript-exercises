const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let newArray = Array.from(arr);
  let total = 0;

  for (let i = 0; i < newArray.length; i++) {
    total += newArray[i];
  }

  return total;
};

const multiply = function(arr) {
  let multiplyArray = Array.from(arr);
  let result = 1;

  for (let el of multiplyArray) { 
    result *= el;
  }

  return result;
};

const power = function(base, thePower) {
	return Math.pow(base, thePower);
};

const factorial = function(a) {
  let result = 1;

  for (let i = 1; i <= a; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
