// Promise-> Async Programming, promise is a future value
// pending-> fullfilled(then is a fullfilled state), reject(reject is a catch state)

// import fs from 'fs'-> it is a callback type module

import fs from 'fs/promises' // it is a promise type module
fs.readFile("node/data/data.txt","utf8")
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
.finally(()=>{
    console.log("finally completed");
})

fs.readFile("node/data/users.json","utf8")
.then((users)=>{console.log(users);
return fs.readFile("node/data/posts.josn","utf8").then((posts)=>{
    return posts;})
})
.then((posts)=>{
    console.log(posts);
    return fs.readFile("node/data/comments.json","utf8")
    .then((comments)=>console.log(comments))
})
.catch((error)=>console.log(error))