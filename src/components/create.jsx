
 // create.js

//Imports useState to store the movie details
import { useState } from "react";

//Imports axios to send data to the server
import axios from 'axios';

function Create() {

  //Stores the movie title, year and poster
  const [title, setTitle] = useState('');
  const[ year, setYear] = useState('');
  const[poster, setPoster] = useState('');

  //Runs when the form is submitted
  const handleSubmit = (e) => {

    //Prevents the page from refreshing
    e.preventDefault();

    //Displays the movie details in the console
    console.log(title,year,poster);

    //Creates an object with the entered movie details
    const movie = {
      title: title,
      year: year,
      poster: poster
    }

    //Sends the movie details to the backend
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => {console.log(res.data)})
      .catch((error) => {console.error(error)});
  }

  //Displays the form for adding a movie
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>

        {/*Input field for the movie title*/}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        {/*Input field for the movie year*/}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>

        {/*Text area for entering the movie poster link*/}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <textarea type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>

        {/*Button to submit the movie details*/}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

//Exports the component so it can be used elsewhere
export default Create;
