var variable = 10; // variable = undefined
// now variable =  10 code phase  

(()=>{
    console.log("1",variable);  //10 
    variable = 20; //20
    console.log("2",variable)  //20
})(); // IIFE immediately invoked function expression

console.log("3",variable);   //20
var variable = 30;  // variable - undefined 


console.log("4",variable);  // 30


