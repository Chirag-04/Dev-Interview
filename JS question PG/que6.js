// first of all only variables in the root context is declared

variable  = 10; // undefined 10 

// an internal context is created for this function
(()=>{
    foo = 100;  // foo = 100
    console.log(variable) // 10
    var foo = 100;  // foo = undefined 
    variable = 20;   // 20
    console.log(variable)
})();


// after this the interal context gets deleted


console.log(foo)   // error foo is not defined 
console.log(variable)  //20
var variable = 30;  // undefined

//output
//10
//20
//20
//