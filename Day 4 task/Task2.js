// 2.Do the below programs in arrow functions.


// a. Print odd numbers in an array

const numbers = [8, 19, 5, 6, 14, 9, 13];
var odd = [];

const odds = (num) => {
    for (const number of num) {
        if (number % 2 === 1) {
            // var odd = [];
            odd.push(number);

        }
    } return odd;
}
console.log(odds(numbers));


//b. Convert all the strings to title caps in a string array
const string = ("this is arunachalam");
 const titlecaps=(str) => {
     str = str.toLowerCase().split(' ');
     for (let i = 0; i < str.length; i++) {
         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     }
     return str.join(' ');
 }
console.log(titlecaps(string));

// c. Sum of all numbers in an array
var sum = 0;
const add = (num) => {
    for (let i = 1; i < num.length; i++) {
        sum += num[i];
    } return sum;
}

console.log(add(numbers));

// d.Return all the prime numbers in an array


var prime = [];
var primenum = (num) => {
    for (let i = 0; i < num.length; i++) {
        let factor = 0;
        for (let j = 0; j <= num[i]; j++) {
            if ((num[i] % j) === 0) {
                factor++;
            }
        }
        if (factor === 2) {
            prime.push(num[i]);
        }
        // console.log(num [i])
    } return prime;
}
console.log(primenum(numbers));

// e. Return all the palindromes in an array

var strings = [ "fed", "mom", "cab", "racecar", "cool" ];
var palindrom = [];


const isPalindrome = (s) => {
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
 
const PalindromicStrings = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        if (isPalindrome(arr[i])) {


            palindrom.push(arr[i]);
        }
    } return palindrom;
 }
 
console.log(PalindromicStrings(strings));