var variable = 10;  

(()=>{
    console.log("1",variable); 
    var variable = 20; 
    // scope withing brackets so value undefined 
    console.log("2",variable)   // value 20
})(); 

console.log("3",variable);   // inner variable is not accessible 

var variable = 30; 

console.log("4",variable);  


// Output
// 1 undefined
// 2 20
// 3 10
// 4 30



