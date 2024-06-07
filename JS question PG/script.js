// map 
// syntax arr.map(fucntion)
// convert a number to binary num.toString(2)

                  // MAP //
                  // used for the transformation
const arr = [1,2,3,4,5];
const items = [ 
    {name : 'bike'  , price : 100},
    {name : 'bus'  , price : 30},
    {name : 'plane'  , price : 20},
    {name : 'scooty'  , price : 300},
]

const ans  = arr.map((x) =>{
    return x*2;
} )

console.log(ans);

const itemMap = items.map((item)=>{
    return item.name;
})

console.log("itemMap" , itemMap);

//________________________________________
              // FILTER //
              // filter on the basis of a filter
const age = [10,20,32,67,54,39,3,4];
function sortAge(age){
    return age <30;
}
const ans2 = age.filter(sortAge);
console.log(ans2);

const ans3 =  age.filter((age)=>{
    return age >40;
})
console.log(ans3)


const ans4 =  items.filter((item)=>{
    return item.price > 50;
})

console.log(ans4);
//________________________________________
