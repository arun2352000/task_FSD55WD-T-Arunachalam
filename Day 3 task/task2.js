let XMLHttpRequest = require('xhr');


let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let users = JSON.parse(xhr.responseText);

    let flag = [];

    for (let user of users) {
        flag.push(user['flag']);
    }

    console.log(flag);
};

// send the http request
xhr.send();