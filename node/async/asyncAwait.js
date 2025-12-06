import fs from "fs/promises";
let loading;
async function read() {
    loading=true;
  try {
    const users = await fs.readFile("node/data/users.json", "utf8");
    const posts = await fs.readFile("node/data/posts.json", "utf8");
    const comments = await fs.readFile("node/data/comments.json", "utf8");
    console.log(users);
    // loading=false;
  } catch (error) {
    console.log(error);
    // loading=false;
  }finally{
    loading=false;
    console.log("Finally Completed")
  }
}

// async arrow function
// const read = async ()=>{}

read();
