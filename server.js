// In node.js when you want to use a package in another file you must required it. 
const express= require("express");

// To initialize the server, we need to call "the express function". This create an express application to work on 
const app=express();

/* Now we have to start listen to our request ( we use the app.listen() method). The listen method take a callback function  and the "port number"
    - Think of a port number as a door. Any request that cane to the server will come via the door
*/

app.listen(3000,() => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});
/* --- Communicate with the server
Now that we had build the server we need to communicate with it. Ny Doing that we make use of " the Handler function"
The handler function -is when the request reach the server and we need ways to responding to it
- The handler function is just a function which receive an request and handle it. It it always call with the "request" and "response" object
-The response object is what gets sent back to the client. It contains the information that gets displayed in the web page. 
-he get() method is one of the methods used to define a handler function in Express. It takes two parameters: the endpoint at which to trigger an action 
*/
app.get("/", (request,response) => {
    response.send("Hello World");
});