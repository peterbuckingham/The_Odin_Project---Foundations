const repeatString = function (string, num) {
  let repeatedString = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= num; i++) {
      repeatedString += string;
      console.log(repeatedString);
    }
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
