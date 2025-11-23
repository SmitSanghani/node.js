const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    try {
        console.log(req.method, req.url)
        if (req.url === "/get-user") {
            res.end("user");
        }
        else if (req.url === "/get-product") {
            res.end("product")
        }
        else if (req.url === "/add-user") {
            let body = "";
            req.on('data', (chunk) => {
                console.log("chunk", chunk.toString())
                body += chunk.toString()
                console.log(body)
            });
            req.end('end', () => {
                console.log(body)
                const parsed = JSON.parse(body);

                req.end("parsd")
            })
        }
    } catch (err) {
        console.error("an error occurred", err)
        res.statusCode = 400;
        res.end(err.message)
    }
});

server.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
