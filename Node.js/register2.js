var http = require("http");
var url = require("url");

var server = http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url, true);

    // Check if the request is POST and the path is /register
    if (req.method === "POST" && parsedUrl.pathname === "/register") {
        let body = '';

        // Collect the data chunks
        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });

        // End of data reception
        req.on('end', () => {
            var data = JSON.parse(body); // Parse body as JSON

            // Get user and pass from the body
            var user = data.user;
            var pass = data.pass;

            // Simple response
            const response = {
                res: "successfully registered",
                user: user,
                pass: pass
            };

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Invalid path or request method" }));
    }
});

server.listen(3003, () => {
    console.log("Server is running on port 3002");
});
