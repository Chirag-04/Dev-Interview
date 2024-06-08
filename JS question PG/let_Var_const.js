// var - fucntion scope 
// let , const = block scope 

// var can be reassign muitple times 

// var variable can be used before declaration (hoisting)

// const and let almost the same 


if(true){
    var a = 10;
}
console.log(a);  // since no function is present hence it has global scope
 var a =  20;
 var a = -50;

 console.log(a);

if(true){
    let b = 30;
    console.log(b);
}

// console.log(b) // out of block scope

let age = 18;
console.log(age);

age =  80;
console.log(age);


const income  =  300
console.log(income);

// income =  400; // we cant reiniitalize 
console.log(income); 


const item = {name: "juice"}

item.name = 'milk'

console.log(item);