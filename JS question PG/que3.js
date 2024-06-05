 
 // again eecution context will created 
 // in the memory phase
 // var myFun : undefined

 
 myFun();

 var myFun = function(){  // var myFun : undefined
    console.log("First") 
 }

 myFun();

 function myFun(){  // var myFun : fn(){} pointing to this 
    console.log("second")
 }

 myFun();


 // output 
 // second
 // first
 // first