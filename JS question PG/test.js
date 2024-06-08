// call this can be used to borrow fucntion
function printFullname(hometown){
    console.log(this.firstName + " " + this.lastName + " from " +  hometown);
}

let name1 = {
    firstName : "Chirag",
    lastName : "Maini",
}
printFullname.call(name1 , "delhi");

// fucntion 2 
let name2 = {
    firstName : "mark",
    lastName : "wood",
}

printFullname.call(name2  , "mumbai") // fucntion for priting full name and this is to be called for name 2 objects


// call and apply methods are almost same we just pass the argument in the array list 
printFullname.apply(name2 , ["mumbai"])


let printMyName =  printFullname.bind(name1 , "delhi");
console.log(printMyName);
printMyName();