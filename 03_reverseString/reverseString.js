const reverseString = function(string) {

    let reversedString = '';
    let stringLastIndex = string.length - 1;
    for (let i = stringLastIndex; i >= 0; i--) {
        reversedString += string.slice(i, i + 1);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
