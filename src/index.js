var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url == '/'){
      res.writeHead(200, {"content-type": "text/plain"});
      //set response content
      res.write("This is Home Page");
      res.end();
  } 
    else if(req.url == '/welcome'){
     res.writeHead(200, {"content-type": "text/pain"});
     res.write("Welcome to Dominos!");
     res.end();
    }


    
    // else {
    //     res.writeHead(404, {"content-type": "text/html"});
    //     res.write("<h1>Invalid Request</h1>");
    //     res.end();
    // }
}

httpServer.listen(8081);
console.log('Node.js web server at port 8081 is running..')

module.exports = httpServer;