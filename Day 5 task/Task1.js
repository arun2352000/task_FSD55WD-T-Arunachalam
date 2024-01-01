// resume data using json

var resume = {
    "name": "arunachalam",
    "education": {
        "schooling": {
            
                "name": "santhome hig.sec.school",
                "cgp": "'7.5'",
                "std": "HSC",      
            
                "name": "santhome hig.sec.school",
                "cgp": "'7.5'",
                "std": "SSC"     
        } ,
        "college": 'AM jain'
    },

    "contactDetails": {
        "email": 'arunachalam2352000@gmail.com',
        "phone": "9445805362",
        "pincode":"600004"
    },
    "skills": ['C', 'C++', 'Js', 'Python', 'react']
}
const obj = JSON.parse(resume);
// console.log(JSON.stringify(resume));
// console.log(JSON.parse(resume));
console.log(resume.skills);