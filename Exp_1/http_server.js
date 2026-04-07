const http=require("http");
const fs=require("fs");
const url=require("url");

const my_server=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico")
        return res.end();

    const log=`${Date.now()} : ${req.url} New Request Received\n`;

    const myUrl=url.parse(req.url,true);
    console.log(myUrl);

    fs.appendFile("server_log.txt",log,(err,data)=>{
        switch(myUrl.pathname){
            case '/':
                res.end("Hello from Home Page");
                break;
            case '/about':
                const username=myUrl.query.myname;
                res.end(`Hello, ${username}`);
                break;
            case '/search':
                const search=myUrl.query.search_query;
                res.end("Here are your search results for: "+search);
                break;
            default:
                res.end("404 Page Not Found!");
        }
    });
});
my_server.listen(8000,()=>{
    console.log("Server started on port 8000");
});
