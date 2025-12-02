import http from 'http'

// creating server
const server=http.createServer((request,response)=>{
    const user={
        name:"manish kumar yadav",
        age:23,
        address:"janakpur"
    }
    // response.writeHead(200,{"content-type":"text/plain"})
    response.writeHead(200,{"content-type":"application/json"})
    // response.end("<h1>Hello Manish Kumar Yadav</h1>");
    response.end(JSON.stringify(user));
})
server.listen(5000,()=>{
    console.log("Server is running at port:5000......")
})