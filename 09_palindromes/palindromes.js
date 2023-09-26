const palindromes = function (inputtedString) {

    let comparison = splitAndReverse(inputtedString);
    inputtedString = splitStr(inputtedString);
    inputtedString = standardizeStr(inputtedString);

    function splitStr(str) {
        let result = str.toLowerCase().split('');

        return result;
    }

    function splitAndReverse(str) {
        let result = splitStr(str).reverse();

        return standardizeStr(result);
    }

    function standardizeStr(str) {
        let result = str.filter(item => item !== ' ' &&
            item !== ',' && item !== '.' && item !== '!');
        result = result.join('');
        result = result.toLowerCase();
        removePunctuation(result);

        return result;
    }

    function removePunctuation(string) {

        string = string.split('');
        string = string.filter(item => item !== '!' &&
            item !== ',' || item !== ' ' ||
            item !== '.').join('');

        return string;
    }

    return comparison === inputtedString;
};

// Do not edit below this line
module.exports = palindromes;
