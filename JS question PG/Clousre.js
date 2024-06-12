// a closure is a function bundled together 
// or we can say they are function inside functions
// closure gives an access to outer function scope

function nameOfperson(myName){
    // const myName =  "Chirag";
    function sayMyName(){
        console.log(myName);
    }
    return sayMyName;
}
let fn = nameOfperson("Chirag");
console.log(fn);

