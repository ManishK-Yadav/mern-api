// Callback function: Function used as a parameter. it is used for what to do after this work is completed
// Higher Order function: Function in which we pass parameter as function(callback function) OR function that accepts a function as parameter

import fs from "fs"

fs.readFile("../node/data/users.json","utf8",
    (error,data)=>{
        if(error) throw error;
        console.log(data)
    }
)