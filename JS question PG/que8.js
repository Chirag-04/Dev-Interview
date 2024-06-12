
a = 10; // a =  10
console.log(a); // output 10
var a;  // var 


// // temporal deadzone 
// console.log(b)  // throw us an error that can not access before intialization
// let b =  10;


// hoisting works for l

var b= 10;
var b= 100;
var b = 1000;
console.log(b)


// let can no be re declared 

// let -> fucntion scope 
// var --> fucntion scope 

for(var a = 0 ;  a<10 ; a++){
    setTimeout(()=>{
        console.log(a)
    })
}

// taking the example of let -> function 
for(let a = 0 ;  a<10 ; a++){
    setTimeout(()=>{
        console.log(a)
    })
}
