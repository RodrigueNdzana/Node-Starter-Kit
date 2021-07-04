// In node.js when you want to use a package in another file you must required it. or import it--- import express from 'express'
const express= require("express");

// To initialize the server, we need to call "the express function". This create an express application to work on 
const app=express();

/* Now we have to start listen to our request ( we use the app.listen() method). The listen method take a "port number and a "callback function  and 
    - Think of a port number as a door. Any request that cane to the server will come via the door
  
  listen() is the server method. Any code inside the listen() method would be what the programmer see NOT the client. That mean "Server is listening on port 3000. Ready to accept requests!" would be running on the back end NOT the front end. It would show on the terminal but NOT on the browser
*/

app.listen(3000,() => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});
/* --- Communicate with the server
Now that we had build the server we need to communicate with it. By Doing that we make use of " the Handler function"
The handler function -is when the request reach the server and we need ways to responding to it
- Any piece of code inside the get() method is the handle function. I. It is the piece of code that handles what that routes should be doing. 
- The handler function is just a function which receive an request and handle it. It it always call with the "request" and "response" object
-The response object is what gets sent back to the client. It contains the information that gets displayed in the web page. 
-he get() method is one of the methods used to define a handler function in Express. It takes two parameters: the endpoint at which to trigger an action 
*/
app.get("/", (request,response) => {
    response.send("Hello World");
});

/******* Week  Two - CRUID Method-- 
CRUID Stand for Create, Retrieve data, Update Date and Delete Data
*** */
const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

/* getting a specific album
albumId will tell us what album we can return so the call will be something like GET /albums/242342 and that will return the album with that has albumId 242.

The find() method will iterate through the albumsData and return the album with a specific Id enter by the user
If the booleanExpression (condition) is true the album with a unique Id is return or a message in a form  json is send to a user
stating that the entered albumId is not found in the array. The ternary operator is a from of writing a dual-alternative selection (if...else s)

'albumId' in the cases is a parameter. The ':' after the / is a way of calling for a specific item in Node.js. Therefore, 'albumId' would target the id property in the albumData array of object
*/
app.get("/albums/:albumId", (request,response) => {
  const { albumId } = request.params;
  const booleanExpression= albumsData.find( (album)  => album.albumId ===  albumId);
  (booleanExpression) ? response.status(200).json(booleanExpression)
  : response.status(404).json(`The album will the id: ${albumId} is not found`);
});
