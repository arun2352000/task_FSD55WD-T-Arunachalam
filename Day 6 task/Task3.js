     

      class Person {
        constructor(firstName, lastName, age, department, email, mobile, city){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.department=department;
            this.email=email;
            this.mobile=mobile;
            this.city = city;
        }
        getPersonDetails(){
            return `Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            department: ${this.department}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}`;
        }
    }
    let person1 = new Person("selva", "siva",24, "mechanical", "selvasiva@gmail.com", 9150485661, "ambasamudram");
    let person2 = new Person("parama","sivan", 27, "mechanical", "paramasivan@gmail.com", 7639782192, "chennai");
    
    console.log(person1.getPersonDetails());
    console.log(person2.getPersonDetails());
    
 
 