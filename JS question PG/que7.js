// scope of let / cosnt =  local f

// for(var i=0  ; i<10 ; i++){
//     console.log(i);
// }

for(var i=0  ; i<10 ; i++){
   setTimeout(()=>console.log(i), 0);
}

// var has a global context 
// so first loop will run 10 times 
// then while writing var woulld have been updated to 10

// while in case of let
// it create diff variable for each iteration 