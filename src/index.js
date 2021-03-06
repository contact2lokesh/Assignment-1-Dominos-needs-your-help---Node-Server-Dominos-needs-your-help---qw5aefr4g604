var http = require("http");

const httpServer = http.createServer(handleServer);

const objData =   {
                      phone: '18602100000',
                      email: 'guestcaredominos@jublfood.com'
                   }
                   const jsonContent = JSON.stringify(objData);
                //    const objContent = JSON.parse(jsonContent)

function handleServer(req, res) {
     if(req.url == '/welcome'){
     res.writeHead(200, { 'content-type': 'text/plain'});
     res.write('Welcome to Dominos!');
     res.end();
    }
     else if(req.url == '/contact'){
         res.writeHead(200, {'content-type': 'application/json'});
         res.write(jsonContent);
         res.end();
     } else{
           res.statusCode =  404;
           res.end();
     }
    } 


httpServer.listen(8081);
console.log('Node.js web server at port 8081 is running..')

module.exports = httpServer;