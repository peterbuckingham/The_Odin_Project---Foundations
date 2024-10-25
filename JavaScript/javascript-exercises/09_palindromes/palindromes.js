const palindromes = function (words) {
    const reversedSting = words.replace(/[\W_]/g, '').split('').reverse().join('').toLowerCase();
    const cleanedString = words.replace(/[\W_]/g, '').toLowerCase()
    return reversedSting === cleanedString
};

// Do not edit below this line
module.exports = palindromes;
