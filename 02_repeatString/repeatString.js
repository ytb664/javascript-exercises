const repeatString = function(inputString, repeatNumber) {

    if (repeatNumber < 0) {
        return "ERROR";
    }

    let result = "";
    for (let i = 0; i < repeatNumber; i++) {
        result += inputString;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
