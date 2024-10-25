const fibonacci = function (num) {
  const toNum = parseInt(num);

  if (toNum < 0) return "OOPS";
  if (toNum == 0) return 0;
  if (toNum == 1) return 1;

  let first = 0;
  let second = 1;
  let fibb = 0;

  for (let i = 2; i <= toNum; i++) {
    fibb = first + second; // Next Fibonacci number
    first = second; // Move to the next pair
    second = fibb; // Update the second number
  }

  return fibb;
};

// Do not edit below this line
module.exports = fibonacci;
