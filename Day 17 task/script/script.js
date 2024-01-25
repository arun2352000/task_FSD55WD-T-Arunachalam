var API = "https://restcountries.com/v3.1/all";
let values
var apifetch = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    data.map((value) => {
      var card = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cca3,
        capital: value.capital,
        region: value.region,
        latitude: value.latlng[0],
        longitude: value.latlng[1],
      };
      createcountry(card);
      // console.log(value.latlng[0]);
      // console.log(value.latlng[1]);
      // console.log(value)
    });
  });
 

  function createcountry({
    name,
    flag,
    code,
    capital,
    region,
    latitude,
    longitude,
  }) {
    document.body.innerHTML += ` <div class="container d-flex flex-row">
    <div class="card"  >
         <div class="card-header">
    ${name}
  </div>

  <div class="card-body car" >  
  <img src="${flag}" class="flag" alt="${name}'Flag image">
  <p class="card-text"><span>Captial :</span> ${capital}</p>
  <p class="card-text"><span>Region :</span> ${region}</p>
  <p class="card-text"><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${region})) >Click for Weather</a>
 <div id=${region}>   </div>
  
 
  </div>
</div>
</div>
`;
  }

  function block(lat, lng, name) {
    var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`;

    console.log(name);
    // console.log(lat);
    // console.log(lon);
    
    fetch(WAPI)
      .then((response) => response.json())
      .then((data) => {
          
        console.log(data.main.humidity);
        
        alert(`
               For ${name.id}  
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`);
      });
  }

  document.addEventListener("click", (event) => event.preventDefault());