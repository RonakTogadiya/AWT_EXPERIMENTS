const url=require("url");

const myUrl=url.parse("http://localhost:8000/about?myname=Ronak&age=21",true);

console.log("Protocol:",myUrl.protocol);
console.log("Host:",myUrl.host);
console.log("Hostname:",myUrl.hostname);
console.log("Port:",myUrl.port);
console.log("Pathname:",myUrl.pathname);
console.log("Search:",myUrl.search);
console.log("Query:",myUrl.query);
console.log("Query Name:",myUrl.query.myname);
console.log("Query Age:",myUrl.query.age);
