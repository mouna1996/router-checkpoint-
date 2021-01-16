
import React, { useState } from "react";
import './App.css';
import MovieList from './MovieList';
import Recherche from './recherche';
import AddMovie from './AddMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from "./Description";
import { BrowserRouter } from "react-router-dom";
import { Route,Link } from 'react-router-dom';
import MovieCard from './MovieCard';


function App() {
 
  const [filter, setFilter] = useState({
    text: '', star: 0
  })
  const [movies, setMovies] = useState([
    {
      image: "https://popandup.fr/wp-content/uploads/2015/12/StarWars2HomePopUp.jpg",
      title: "Star Wars",
      description: "Composée de trois trilogies et de plusieurs films dérivés, la saga créée par George Lucas comprend à ce jour douze films sortis et plusieurs films en développement. ",
      rate: 2,
      url : "https://www.youtube.com/watch?v=pHgwf2eMFnA",
    
    },
    {
      image: "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg",
      title: "Harry Potter à l'école des sorciers",

      description: "Cest un film fantastique britannico-américain réalisé par Chris Columbus, sorti en 2001.",
      rate: 4,
      url: "https://www.youtube.com/watch?v=3rl3vyof3mo",
      
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/1/15/Casino_Royale_2_-_UK_cinema_poster.jpg",
      title: "Casino Royale",
      description: "le film a été tourné en direct dans les locaux de la chaîne de télévision.",
      rate: 5,
      url: "https://www.youtube.com/watch?v=Tl9_c6wZiZU",
      
    },
    {
      image: "https://popcornusa.s3.amazonaws.com/movies/650/2205-11562-Bumblebe.png",
      title: "Bumblebee",
      description: "est un film de science-fiction américain écrit par Christina Hodson et réalisé par Travis Knight, sorti en 2018.",
      rate: 3,
      url : "https://www.youtube.com/watch?v=XE2qP_NdQfY",
    }
    ]
  )
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Movies</h1>
      
      <div className= "search">
        <Recherche setFilter={setFilter} filter={filter} />
      <AddMovie addFilm={setMovies} films={movies}/>
      </div>
      
      <MovieList movies={movies.filter((e) => 

        (e.title.toLowerCase().includes(filter.text.toLowerCase())) && e.rate >= filter.star
         

      )} />
      
      {console.log(filter)}
      
      <Route path="/description/:name" render={(props) =><Description  {...props} movies={movies}  /> }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
