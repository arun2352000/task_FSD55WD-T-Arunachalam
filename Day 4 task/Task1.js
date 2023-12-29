const numbers = [8, 19, 5, 6, 14, 9, 13];
var odd = [];

const odds = function (num) {
    for (const number of num) {
        if (number %2 ===1) {
            // var odd = [];
            odd.push(number);
            
        }
    }return odd;
}
console.log(odds(numbers));

