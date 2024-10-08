var http = require("http");

var {otp}=require("./otp");

var {queary}=require("./query")

var url=require("url");
const { query } = require("./query");

var server = http.createServer((req, res)=>{

var pared = url.parse(req.url);

var j = query(pared.query);

console.log(j.count);


res.write(otp(j.count))

res.end();
    
});

server.listen(3004,()=>{
    console.log("connetced");
})