const removeFromArray = function() {

    let argLastIndex = arguments.length - 1;
    let arrayArgument = arguments[0];
    let endArray = [];
    // Loop from the last argument and store the value to variable
    for (let i = argLastIndex; i > 0; i--) {

        if (argLastIndex === 0) break; 
        let valueToRemove = arguments[i];
        // Comparing each element in the array with the stored value
        for (let j = 0; j < arrayArgument.length; j++) {
            if (arrayArgument[j] != valueToRemove) {
                continue;
            }

            endArray = arrayArgument.slice(j, 1);
        }
    }

    return endArray;
};

// Do not edit below this line
module.exports = removeFromArray;
