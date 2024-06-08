//lets start creating a demo server 
const posts= [
    {title : 'Post one '  , body :'this is post one '},
    {title : 'Post two '  , body :'this is post two '},
];

function getPost(){
    setTimeout( ()=>{
        let output = '';
        posts.forEach((post)=>{
            output+= `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    } , 1000);
}

function createPost(newPost , callback){
    setTimeout(()=>{
        posts.push(newPost);
        callback();
    },2000)
}


getPost();
// just after creating this post call get post 
createPost({title:'Post Three'  , body : 'This is post three'}
    ,getPost
);






