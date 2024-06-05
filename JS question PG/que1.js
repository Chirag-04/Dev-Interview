// que 1 

// hoisting 
// in js whenever a script is run a js creates global execution context which has two parts memory phase and code phase


console.log("age"  , age); // undefined as in the memory phase it has been already declared 

var age =  20 ;
// but let/const  age = 20 will gives us the error it cannot access before intialization


console.log("age"  , age);