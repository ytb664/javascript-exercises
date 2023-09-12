const sumAll = function() {

    let sum = 0;
    const startNum = arguments[0];
    const endNum = arguments[1];

    if (startNum < 0 || endNum < 0) {
            return 'ERROR';
        }

    if (startNum < endNum) {
        for (let i = startNum; i <= endNum; i++) {
            sum += i;
        }
    } else if (startNum > endNum) {
        for (let i = endNum; i <= startNum; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
