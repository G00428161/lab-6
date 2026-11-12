
 //Imports React hooks for managing data and running code
import { useEffect, useState } from "react";

//Imports axios to get data from the server
import axios from 'axios';

//Imports the Movies component to display the movies
import Movies from "./movies";

const Read = () => {

    //Stores the list of movies
    const [myMovies, setMovie] = useState([]);

    //Runs when the component first loads
    useEffect(
        () => {
            //Gets the movie data from the backend server
            axios.get('http://localhost:4000/api/movies')
                .then((response) => {

                    //Displays the movie data in the console
                    console.log(response.data.movies);

                    //Updates the movie list with the data received
                    setMovie(response.data.movies);
                })
                //Displays an error if the request fails
                .catch((error) => { console.log(error) });
        }, []
    );

    //Displays the heading and passes the movies to the Movies component
    return (
        <div>
            <h1>Hello from Read component</h1>
            <Movies myMovies={myMovies}></Movies>
        </div>
    );
}

//Allows this component to be used in other files
export default Read;
