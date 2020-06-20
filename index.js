// var -> funtion
// let -> block
// const -> block

// const x = 1;
// function sayHello(){
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }

// sayHello();

// Object

// const person = {
//     name: 'Amir',
//     walk(){},
//     talk(){}
// };

// person.walk();
// person.talk();

// this
// const person = {
//     name: 'Amir',
//     walk(){
//         console.log(this);
//     }
// };

// Arrow function

// const square = function(number){
//     return number * number;
// }

// const square = number =>number * number;


// const job = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false}
// ]

// const activeJobs = jobs.filter(function(job) {return job.isActive;});
// const activeJobs = jobs.filter(job => job.isActive);


// map

// const colors = ["red", "green", "blue"];
// const item = colors.map(color => `<li>${color}`)

// Object Destructuring

// const address = {
//     street: '',
//     city: '',
//     country: ''
// };

// const street = address.street;
// const city = address.city;
// const country = address.country;

// const {street , city, country} = address;

// const {street: st} = address;

// Spread Operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combine = first.concat(second);
// const combine = [...first, 'a', ...second];

// const first = {name: 'Amir'};
// const second = {job: 'Programmer'};
// const combine = {...first, ...second, location: 'Surabaya'};

// class

// class Person {
//     constructor(name){
//         this.name = name;
//     }
    
//     walk(){
//         console.log("walk");
//     }
// }

// const person = new Person("Amir");
// person.walk();

// class Teacher extends Person{
//     constructor(name, degree){
//         super(name);
//         this.degree = degree;
//     }

//     teach(){
//         console.log("teach");
//     }
// }

// const teacher = new Teacher("Amir", "MSc");
// teacher.degree;

import { Teacher } from "./teacher.js";
const teacher = new Teacher("Amir", "MSc");
teacher.teach();