let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// handle the response data
xhr.onload = function () {
    let users = JSON.parse(xhr.responseText);

    let contriesNames = [];
    let region = [];
    let subregions = [];
    let population = [];

    for (let user of users) {
        contriesNames.push(user['name']);
        region.push(user['region']);
        subregions.push(user['subregion']);
        population.push(user['population']);
    }

    console.log(contriesNames);
    console.log(region);
    console.log(subregions);
    console.log(population);
};

// send the http request
xhr.send();