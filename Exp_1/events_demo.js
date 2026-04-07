const EventEmitter=require("events");

const myEmitter=new EventEmitter();

//Event Listener 1
myEmitter.on("greet",(name)=>{
    console.log(`Hello, ${name}!`);
});

//Event Listener 2
myEmitter.on("greet",(name)=>{
    console.log(`Welcome to Node.js, ${name}!`);
});

//Event Listener for farewell
myEmitter.on("farewell",(name)=>{
    console.log(`Goodbye, ${name}!`);
});

//Emit events
console.log("--- Emitting greet ---");
myEmitter.emit("greet","Ronak");

console.log("--- Emitting farewell ---");
myEmitter.emit("farewell","Ronak");

//Once listener (fires only once)
myEmitter.once("login",(user)=>{
    console.log(`${user} logged in`);
});

console.log("--- Emitting login twice ---");
myEmitter.emit("login","Admin");
myEmitter.emit("login","Admin"); //This won't fire
