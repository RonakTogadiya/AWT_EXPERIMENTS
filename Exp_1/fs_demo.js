const fs=require("fs");

//Write File (Sync)
fs.writeFileSync("demo.txt","Hello World from fs!");

//Read File (Sync)
const result=fs.readFileSync("demo.txt","utf-8");
console.log("Read (Sync):",result);

//Append File (Sync)
fs.appendFileSync("demo.txt",`\n${Date()} Appended Line`);

//Read File (Async)
fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err)
        console.log("Error Occurred:",err);
    else
        console.log("Read (Async):",data);
});

//Copy File
fs.copyFileSync("demo.txt","demo_copy.txt");
console.log("File copied to demo_copy.txt");

//Delete Copied File
fs.unlinkSync("demo_copy.txt");
console.log("demo_copy.txt deleted");

//Create Folder
fs.mkdirSync("TempFolder");
console.log("TempFolder created");

//Remove Folder
fs.rmdirSync("TempFolder");
console.log("TempFolder removed");
