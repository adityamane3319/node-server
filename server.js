const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        fs.readFile("./pages/home.html", (err, data) => {
            if(err){
            console.log(err);
            res.end("File not found");
            return;
        }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }else if(req.url === '/about'){
        fs.readFile("./pages/about.html", (err, data) => {
            if(err){
            console.log(err);
            res.end("File not found");
            return;
        }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }else if(req.url === '/services'){
        fs.readFile("./pages/services.html", (err, data) => {
            if(err){
            console.log(err);
            res.end("File not found");
            return;
        }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }else if(req.url === '/contact'){
        fs.readFile("./pages/contact.html", (err, data) => {
            if(err){
            console.log(err);
            res.end("File not found");
            return;
        }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }else if(req.url === '/style.css'){
        fs.readFile("./public/style.css", (err, data) => {
            if(err){
            console.log(err);
            res.end("File not found");
            return;
        }
            res.writeHead(200, {"Contect-Type": "text/css"});
            res.write(data);
            res.end();
        });
    }else {
        fs.readFile('./pages/404.html', (err, data) => {
            if(err){
            console.log(err);
            res.end("File not found");
            return;
        }
            res.writeHead(404, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
});

server.listen(PORT, () => {
    console.log(`Our Server is up and running at http://localhost:${PORT}`);
});