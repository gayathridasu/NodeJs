var http = require("http");

var url = require("url");

var server = http.createServer((req, res) => {
   
    if (req.method == "POST" && req.pathname == "register") {
        
        var parsed = url.parse(req.url);
        var query = parsed.query;
        console.log(query)

        // var user = query.user; 
        // var pass = query.pass; 
        
        const response = {
            res: "successfully registered",
            details: {
                user: user,
                pass: pass
            }
        };

    
        res.write(JSON.stringify(response)); 
        res.end();
    } else {
        
        res.write("Invalid input"); 
        res.end();
    }
});

server.listen(3002, () => {
    console.log("Connected");
});
