let obj1 = {
    "name": 'Person 1',
    "age":5
};
let obj2 = {
    "age":5,
    "name": 'person 1'
};
let age1 = obj1['age'];
let age2 = obj2['age'];
console.log(age1 === age2);
let nam1 = obj1['name'];
let nam2 = obj2['name'];
const compareValue = nam1.localeCompare(nam2);
console.log(compareValue);
console.log(age1 === age2 && compareValue == 1);