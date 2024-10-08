var http = require("http");

var server = http.createServer((req, res) => {

    var url = require("url");
    
    var parsed = url.parse(req.url);

    
})