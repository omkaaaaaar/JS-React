//Arrow Functions

// export default function MyComponent () { //inorder to export this file as a module
//     //basic normal function
// }

// export const DoSomething = () => {  //only need to write export 
//     //arrow function
// }



// //Ternary Operator
// if (true){
// //do something
// }else{
//     //do something else
// }
// let age = 18;
// let name = "Omkar";

// if (age >= 18){
//     name = "Adult";
// }else{
//     name = "Minor";
// }
// //normal way
// // Pronblem here is it is taking to much space and lines

// //Ternary Operator way
// name = (age >=18) ? "Adult" : "Minor";
// //condition '?' means if true ':' means if false
// //ts whole statement means if age is greater than or equal to 18 then name is Adult else name is Minor



// const person = {        //Object Destructuring 
//     name: "Omkar",
//     age: 21,
//     isMarried: false
// };


// // const name = person.name;
// // const age = person.age;
// // const isMarried = person.isMarried;
// // //normal way

// // still ts method take too much space

// //Object Destructuring way
// const {name, age, isMarried} = person;  //person name is object from which we r extracting values
// //in ts way we r extracting the values from the object directly into the variables

// const person2 = {...person, name:"John"} //Spread Operator, ts keep the old values of person object and 
// // only change the name to John in person2 object

// const names = ["Omkar", "Patkar", "John"];
// const names2 = [...names, "Doe"]; //add "Doee" to names2 array while keeping old values from names array




// //Map function
// let names = ["Omkar", "Patkar", "John"]; //we want 1 in the end of each name

// names.map((name) =>{
//     return name + " 1";
// });
// console.log(names); //output will be same as names array because map function returns a new array
// // //normal way
// // let modifiedNames = [];
// // for (let i=0; i<names.length; i++){
// //     modifiedNames.push(names[i] + " 1");
// // }

// //need to learn more about map function




//Filter function
let names2 = ["Omkar", "Doe", "Patkar", "John", "Doe", "Does"]; //we want to filter a particular name

names2.filter((name)=>{
    return name !== "Doe";   //returns a new array without "Doe"
})
console.log(names2); //output will be same as names2 array because filter function returns a new array
// other way to get the filtered array in the output, ts o/p is not the modified array
