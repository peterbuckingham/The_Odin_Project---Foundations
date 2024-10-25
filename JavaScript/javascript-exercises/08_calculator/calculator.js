const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length === 0) return 0;
	return array.reduce((sum, num) => sum + num, 0)
};

const multiply = function(array) {
  return array.reduce((sum, num) => sum * num, 1)
};

const power = function(num, power) {
	return (num**power);
};

const factorial = function(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
      else {
        return (num * factorial(num - 1));
    }
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
