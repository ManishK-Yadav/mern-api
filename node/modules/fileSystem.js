import fs from "fs";

/**
 * fs: file system is a node js module for file operations like create, read, update and delete files
 * fs method can be done using 2 methods:synchronous and asynchronous
 * synchronous: blocking operation, wait for this operation complete
 * asynchronous: non-blocking operations
 */
// File read synchronously
const result = fs.readFileSync("data/data.txt", "utf8");
console.log(result);

const image = fs.readFileSync("data/photo.png", "base64");
// console.log(image)

// File write synchronously
fs.writeFileSync("data/data.txt", "I am add new text in data file.");
fs.writeFileSync("data/image.txt", image);

// Update file: append
fs.appendFileSync("data/data.txt", "\n this file is append.");

// Delete:
// fs.unlinkSync("data/image.txt"); // remove only file
// fs.rmSync("data/image.txt",{recursive:true}) //remove file and folder

// Asynchronous Method

// fs.readFile("data/data.txt","utf8",(error,data)=>{
//     if(error) throw error;
//     console.log(data)
// });
// fs.writeFile("data/data.txt","this is new text file.",()=>{
//     console.log("Data written sucessfully")
// });
// fs.appendFile("data/data.txt","\n this file is append.",()=>{})
// fs.rm("data/data.txt",()=>{})
// fs.unlink()
