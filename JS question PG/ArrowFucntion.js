//Difffernce betweeen normal functions and arrow functions 

// syntax
function add(x , y){
   console.log(x+y)
}

const add2 = (x ,y)=>{
   console.log(x+y)
}

add(4, 5);
add2(4 , 5);


//__________________________________________

// hoisting 
// hoisting is available in case of normal fuction but not in arrow function

sayHello();

function sayHello(){
    console.log("Hello World!")
}

// sayBye(); // hoisting nont allowed in case of arrow function
const sayBye = () =>{
    console.log("Bye World!");
}

sayBye();

//____________________________________________
// this keyword in normal fucntion has a local scope where this keyword in arrow fuction has global scope 

const items = {
    name : "sugar",
    price : 130,
    myFunction : function(){
        console.log("Price of sugar is "  ,this.price);
    },
    myNewFunction : () =>{
        console.log("name of item " , this.name);
        console.log(this) // refers to the window 
    }
}
 
items.myFunction();
items.myNewFunction();