const http = require("http");
const path = require("path");

// Express = framework memudahkan http
const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathUrl = req.url;
    if (pathUrl === "/alif") {
        res.end("Ini Url Alif")
    }
    else{
        res.end("Url tidak di temukan")
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server run in port 3000');
});