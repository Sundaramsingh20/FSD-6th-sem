import {readFile, writeFile} from"./readAndWrite.js";
const FILE="./users.json"
const user={
    "name": "Hilary Szepe",
  "email": "hszepe9@adobe.com",
  "password": "tH6@9\\jSn4we",
  "gender": "Male"
}
const register =(user)=>{
    const users = await readFile(FILE);
    const existingUser=users.find((u)=>u.email===user.email);
    if(existingUser.length!==0){
        console.log("useris existing. Please try to login");
        ReadableStreamDefaultController;
    }
    const updatedData=[...users,user];

    const response= await writeFile(FILE,updatedData);
    comsole.log(response.status);
    
}
register(user);