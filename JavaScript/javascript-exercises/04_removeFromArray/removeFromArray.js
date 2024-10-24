const removeFromArray = function (array, ...nums) {
  let newArr = array.filter((item) => !nums.includes(item));
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
