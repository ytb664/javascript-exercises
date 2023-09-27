const findTheOldest = function(people) {

    for (let el of people) {
        if (el.yearOfDeath === undefined) el.yearOfDeath = 2023;
        el.age = el.yearOfDeath - el.yearOfBirth;
    }

    let oldestAge = 0;

    for (let i = 0; i < people.length; i++) {
        if (i === 0) {
            oldestAge = people[i].age;
            continue;
        }

        if (oldestAge < people[i].age) {
            oldestAge = people[i].age;
        }
    }
    
    let result = people.filter(item => item.age >= oldestAge);

    return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
