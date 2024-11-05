//Object complete concept
//A class is a blueprint for creating objects (a particular data structure), providing initial values for state and behavior of the object. 
//Object is a collection of properties and methods
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    occupation: "Software Developer"
};
console.log(person);
//Accessing property values using dot notation
console.log("First Name: ", person.firstName);
console.log("Last Name: ", person.lastName);
//Adding new property to the object
//person.email = "john.doe@example.com";
//TYPE Declaration in Object
var student;
student = {
    name: "imran",
    email: "Imran@gmail.com",
    contact: '020330'
};
console.log(student.name);
console.log(student.email);
var myArray = [
    {
        name: "imran",
        email: "imran@gmail.com",
        contact: "020330"
    },
    {
        name: "ali",
        email: "ali@gmail.com",
        contact: "020330"
    },
    {
        name: "khan",
        email: "khan@gmail.com",
        contact: "020330"
    },
    {
        name: "wali",
        email: "wali@gmail.com",
        contact: "020330"
    }
];
myArray.map(function (item) {
    console.log(item.name);
    console.log(item.email);
    console.log(item.contact);
});
