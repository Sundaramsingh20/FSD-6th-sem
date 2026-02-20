import fs from "fs/promises";
export const readFile =async (FILE)=>{
    try{
        const data=await fs.readFile(FILE,"utf-8");
        return JSON.parse(data);

    }
    catch(error){
        console.log("unable to read data ")
    }
    readFile("./users.json").then(data)=>console.log(data);
;    export const writeFile=async(FILE,data)=>{
        let message="";
        let ststus=0;
        try{
            await fs.writeFile(FILE,JSON.stringify(data,null,2));
            message="Data has been written successfully.";
            ststus =200;
        } catch(error){
            message="unable to write";
            ststus=500;
        }
        return{message,status}
    }
}

    writeFile("/users.json",data)
