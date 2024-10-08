var http = require("http");

var url=require("url");

var server = http.createServer((req, res)=>{
    if(req.method=="POST"&&req.path=="register"){

        let register = [{
            user:"chaitanya",
            password:"chai"

        }]

var pared = url.parse(req.url);

var j = query(pared.query);

console.log(j.count);
    }else{
        console.log("Not a proper input")
    }


res.write(otp(j.count))

res.end();
    
});

server.listen(3004,()=>{
    console.log("connetced");
})