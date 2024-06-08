// promises in js same as promises in real life
// we commit something
/// either that promise is resolved or rejected (failed)

// then is called when the promsise resolved successfully
// catch is called when the promise rejected/fails

// let p = new Promise( (resolve  , reject) =>{
//     let a = 2;
//     if(a==2){
//         resolve("Success")
//     }
//     else{
//         reject("Failed");
//     }
// })

// // then --> resolved , catch --> failed

// p.then( (messgae)=>{
//     console.log("This is in the then" + messgae);
// } ).catch(()=>{
//     console.log("This is in the catch "+  messgae);
// })

//lets start creating a demo server
const posts = [
  { title: "Post one ", body: "this is post one " },
  { title: "Post two ", body: "this is post two " },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      // some error occured 
      const error =  false;
      if(!error){
        resolve();
      }
      else {
        reject("Error:  Something went wrong !");
      }
    }, 2000);
  });
}

// getPost();
// // just after creating this post call get post
// createPost({ title: "Post Three", body: "This is post three" }, getPost);

createPost({title : "Post three"  , body : "This is post three"})
.then(getPost)
.catch((err)=>{
    console.log(err)
});

// Promise.all([promes1 , promise2 , ... ])
// .then(()=>{})

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res)=>console.log(res.json()));


// const promise5 = fetch('https://jsonplaceholder.typicode.com/photos')
// .then((res)=>{
//     console.log(res.json())
// })
    

// async await are methods to manager promises 

async function  init(){
   await createPost({title : "Post four"  , body : "This is post four"})
    getPost();
}

init();
 