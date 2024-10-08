var http =  require("http")
var url = require("url")

var server = http.createServer((req, res)=>{
    var parsed = url.parse(req.url, true);

    if(req.method == "POST"&& parsed.pathname == "/register"){
        
        var query = parsed.query

        res.write(JSON.stringify(query))

        res.end()
    }else{
        res.write("invalid input")
        res.end()
    }
})
server.listen(3000,()=>{
    console.log("connected")
})