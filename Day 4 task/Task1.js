// 1. Do the below programs in anonymous function
/*part 1 of the question*/
            console.log("part 1 prints using anonymous function");
// a. Print odd numbers in an array

const numbers = [3, 1, 2, 5, 8, 19, 7, 6, 14, 9, 13];
var odd = [];

const odds = function (num) {
    for (const number of num) {
        if (number %2 === 1) {
            
            odd.push(number);           
        }
    }return odd;
}
console.log(odds(numbers));

//b. Convert all the strings to title caps in a string array

const string = ("this is arunachalam");
 const titlecaps=function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titlecaps(string));

// c. Sum of all numbers in an array

var sum = 0;
const add = function (num) {
    for (let i = 1; i < num.length; i++) {
        sum += num[i];        
    } return sum;
}

console.log(add(numbers));

// d.Return all the prime numbers in an array


var prime = [];
var primenum = function (num) {
    for (let i = 0; i < num.length; i++){
        let factor = 0;
        for (let j = 0; j <= num [i]; j++) {
            if ((num [i] % j) === 0) {
                factor++;
            }
        }
        if (factor === 2) {
            prime.push(num [i]);
        }
        // console.log(num [i])
    } return prime;
}
console.log(primenum(numbers));


// e. Return all the palindromes in an array

var strings = [ "fed", "mom", "cab", "racecar", "cool" ];
var palindrom = [];


const isPalindrome = function (s){   
    let a = s;
    s = s.split('').reverse().join('');
   return s == a;
}
 

 const PalindromicStrings = function (arr){
    for (let i = 0; i < arr.length; i++) {
 
        if (isPalindrome(arr[i])) {
 
            
            palindrom.push(arr[i]);
        }
    }
    return palindrom;
}
 


console.log(PalindromicStrings(strings));

// f. Return median of two sorted arrays of the same size

var ar1 = [1, 12, 15, 26, 38, 40];
var ar2 = [2, 13, 17, 30, 32, 45];

const getMedian = function (ar1, ar2)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    
    for (count = 0; count <= ar1.length; count++)
    {
        
        if (i == ar1.length)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        
        else if (j == ar2.length)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
  

if (ar1.length == ar2.length) {
    console.log("Median is " + getMedian(ar1, ar2));
}
else {
    console.log("Doesn't work for arrays of unequal size");
}

// g. Remove duplicates from an array
var star = ["apple", "mango", "apple", "orange", "mango", "mango", 5, 6, 7, 1, 5, 6, 4];
var orig = [];
const removeduplicate = function (arr) {
    arr.forEach(function (element) {
            if (!orig.includes(element)) {
                orig.push(element);
            }
        });
    return orig;
}
console.log(removeduplicate(star));

// h. Rotate an array by k times
let Array = [1, 2, 3, 4, 5];
let K = 3;
var karr = [];
 const RightRotate = function (a, k)
{
    k = k % Array.length; 
    for (let i = 0; i < Array.length; i++) {
        if (i < k) {
            let c = (a[Array.length + i - k]);
            karr.push(c);
        }
        else {
            let d = ((a[i - k]));
            karr.push(d);
        }
    }
     return karr;     
}
console.log(RightRotate(Array, K));

// 1. Do the below programs in function IIFE

console.log("\n part 2 prints using IIFE function");
// a. Print odd numbers in an array

// var numbers = [3, 1, 2, 5, 8, 19, 7, 6, 14, 9, 13];
var odd = [];

let oddno = function odds(num) {
    for (const number of num) {
        if (number % 2 === 1) {

            odd.push(number);
        }
    } return odd;
}(numbers);
console.log(oddno);

//b. Convert all the strings to title caps in a string array

// const string = ("this is arunachalam");
let titcap = function titlecaps(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}(string);
console.log(titcap);

// c. Sum of all numbers in an array

var sum = 0;
let sumall = function add(num) {
    for (let i = 1; i < num.length; i++) {
        sum += num[i];
    } return sum;
}(numbers);

console.log(sumall);

// d.Return all the prime numbers in an array


var prime = [];

prime =
    function primenum(num) {
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
}(numbers);
console.log(prime);


// e. Return all the palindromes in an array

var strings = [ "fed", "mom", "cab", "racecar", "cool" ];
var palindrom = [];


let ispal = function isPalindrome(s) {
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
 

palindrom = function PalindromicStrings(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (ispal(arr[i])) {


            palindrom.push(arr[i]);
        }
    }
    return palindrom;
}(strings);
console.log(palindrom);

// f. Return median of two sorted arrays of the same size

var ar1 = [1, 12, 15, 26, 38, 40];
var ar2 = [2, 13, 17, 30, 32, 45];

let med = function getMedian(ar1, ar2) {
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;


    for (count = 0; count <= ar1.length; count++) {

        if (i == ar1.length) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }


        else if (j == ar2.length) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }

        if (ar1[i] <= ar2[j]) {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }

        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }

    return (m1 + m2) / 2;
}(ar1, ar2);
  

if (ar1.length == ar2.length) {
    console.log("Median is " + med);
}
else {
    console.log("Doesn't work for arrays of unequal size");
}

// g. Remove duplicates from an array
var star = ["apple", "mango", "apple", "orange", "mango", "mango", 5, 6, 7, 1, 5, 6, 4];
var orig = [];
orig = function removeduplicate(arr) {
    arr.forEach(function (element) {
        if (!orig.includes(element)) {
            orig.push(element);
        }
    });
    return orig;
}(star);
console.log(orig);

// h. Rotate an array by k times
// let Array = [1, 2, 3, 4, 5];
// let K = 3;
var karr = [];
karr = function RightRotate(a, k) {
    k = k % Array.length;
    for (let i = 0; i < Array.length; i++) {
        if (i < k) {
            let c = (a[Array.length + i - k]);
            karr.push(c);
        }
        else {
            let d = ((a[i - k]));
            karr.push(d);
        }
    }
    return karr;
}(Array, K);
console.log(karr);