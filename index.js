/**
 * Primary File for API
 */

 //Dependencies

var http = require('http');
var url = require('url');


//The server sould respond to all request with a string

var server = http.createServer((req, res)=>{

    //Get the url and parse it
    let parse_url = url.parse(req.url, true);
    
    //Get the path
    let path = parse_url.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g,'');

    //Send the response
    res.end("Request received");

    //Log the request path
    console.log('Request received on path: ' + trimmedPath);
});

server.listen(3000, ()=>{
    console.log("Server listening on port 3000");
});