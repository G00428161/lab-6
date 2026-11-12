
 //Imports Express and creates the app
const express = require('express');
const app = express()
const port = 4000

//Allows the frontend to communicate with the backend
const cors = require('cors');
app.use(cors());

//Allows the server to read data sent from forms and JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sets the permissions for requests coming into the server
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Receives movie details sent from the frontend
app.post('/api/movies', (req, res) => {
  //Displays the received movie data in the terminal
  console.log(req.body);
  res.send("Movie Added:", req.body.title);
})

//Displays a message when the main page is visited
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Sends a list of movies when the frontend requests them
app.get('/api/movies', (req, res) => {

  //Stores the movie information in an array
  const movies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ]

  //Sends the movie list back as JSON
  res.json({movies})
})

//Starts the server on port 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
