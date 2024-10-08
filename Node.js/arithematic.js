var http = require("http");

var url = require("url");

var server = http.createServer((req, res) => {

    var parsed = url.parse(req.url, true);

    var x = parsed.query;

    var a = x.a;

    var b = x.b;

    var operator = x.operator;

    let result;

    switch (operator) {
        case "add":
            result = Number(a) + Number(b);
            break;
        case "sub":
            result = Number(a) - Number(b);
            break;
        case "mul":
            result = Number(a) * Number(b);
            break;
        case "div":
            result = Number(a) / Number(b);
            break;
        case "mod":
            result = Number(a) % Number(b);
            break;
        default:
            result = "invalid";
    }

    res.write(result.toString());
    res.end();

})

server.listen(3000, () => {
    console.log("connected")
})