const findTheOldest = function(people) {

    for (let el of people) {
        el.age = el.yearOfDeath - el.yearOfBirth;
    }

    function getFirstAge(arr) {
        this[0].age;
    }
    let firstAge = people[0].age;
    let result = people.filter(item => item.age > firstAge);


    result = result.filter(item => item.age >= result[0].age);

    return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
