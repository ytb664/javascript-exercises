const leapYears = function(isLeap) {

    if (isLeap % 4 == 0 && isLeap % 100 != 0) {
        return true;
    } else if (isLeap % 100 === 0 &&  isLeap % 400 === 0) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
