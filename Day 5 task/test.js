let myResume={
    "basics": {
        "name": "Arunachalam P",
        "email": "arunachalam2352000@gamil.com",
        "phone": 9445805362,
        "degree": "M.Sc",
        "location": {
            "address": "pblock door no 4 cid police quarters",
            "postalCode": 600004,
            "city": "Chennai",
            "state": "Tamilnadu",
            "country": "India"
      },
      "profiles": [
        {
          "website": "www.linkedin.com/in/arunachalam2352000",
          "github":"https://github.com/arun2352000"
        }
      ]
    },
    
    
    "education": [
      {
        "institution": "Sri krishna college of arts and science",
        "department": "electronics and communication",
        "studyType": "fulltime",
        "batch start year": 2020,
        "batch end year": 2022,
        "gpa": 8.6,
      }
    ],
    "skills": [
      {
            "name": "python,javascript",
            "level": "beginer",
            "project": "home automation"
            
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "web development,youtuber,",
      }
    ]
  }
// console.log(myResume);
// const obj = JSON.parse(myResume);
var obj1 = JSON.stringify(myResume);
// console.log(obj1);
var obj = JSON.parse(obj1);
//  console.log(obj);
console.log(obj.basics.location.state);

for (let i = 0; i <= obj.length; i++) {
  console.log(obj[i]);
}

// for in loop
for (let i in numbers) {
  console.log(numbers[i]);
}

// // for of loop
for (let obj of numbers) {
  console.log(number);
}

// for each loop

numbers.forEach(myFunction);

function myFunction(item) {
  console.log(item);
}