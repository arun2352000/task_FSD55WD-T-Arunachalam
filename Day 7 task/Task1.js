// a. Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     const region = result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(region);
     console.log("task 1.result");
}


// b. Get all the countries with a population of less than 2 lakhs using Filter function

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const population = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(population);
console.log("task 2.result")
}

//c.  Print the following details name, capital, flag, using forEach function

var requestt = new XMLHttpRequest();
requestt.open("GET","https://restcountries.com/v2/all");
requestt.send();
requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
    var total = [];
   resultt.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
        total.push(element.name);
        total.push(element.capital);
        total.push(element.flag);

   });
//    console.log(total);
   console.log("task 3.result");
}

//d. Print the total population of countries using reduce function

var reques = new XMLHttpRequest();
reques.open("GET","https://restcountries.com/v2/all");
reques.send();
reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
    console.log("task 4.result");
 
}

//e. Print the country which uses US Dollars as currency
var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
        console.log("task 5.result");
    }
