let myResume = {
  basics: {
    name: "Arunachalam P",
    email: "arunachalam2352000@gamil.com",
    phone: 9445805362,
    degree: "M.Sc",
    location: {
      address: "pblock door no 4 cid police quarters",
      postalCode: 600004,
      city: "Chennai",
      state: "Tamilnadu",
      country: "India",
    },
    profiles: [
      {
        website: "www.linkedin.com/in/arunachalam2352000",
        github: "https://github.com/arun2352000",
      },
    ],
  },

  education: [
    {
      institution: "Sri krishna college of arts and science",
      department: "electronics and communication",
      studyType: "fulltime",
      "batch start year": 2020,
      "batch end year": 2022,
      gpa: 8.6,
    },
  ],
  skills: [
    {
      name: "python,javascript",
      level: "beginer",
      project: "home automation",
    },
  ],
  languages: [
    {
      language: "Tamil,Enlish",
    },
  ],
  interests: [
    {
      name: "web development, automation and iot developer",
    },
  ],
};

// console.log(myResume);
// const obj = JSON.parse(myResume);
var obj1 = JSON.stringify(myResume);
// console.log(obj1);
var obj = JSON.parse(obj1);
// console.log(obj);
// for loop
console.log("\n for loop");
let keys = Object.keys(obj);
for (let i = 0; i <= keys.length; i++) {
  console.log(keys[i], obj[keys[i]]);
}

// for in loop
console.log("\n for in loop");
for (let key in obj) {
  
  console.log(key, obj[key]);
  
}

// for of loop
console.log("\n for of loop");
const obj2 = obj;
for (const [key, value] of Object.entries(obj2)) {
  console.log(key, value);
}

// for each loop
console.log("\n for each loop");
let res = Object.values(obj);

res.forEach((num) => console.log(num));
