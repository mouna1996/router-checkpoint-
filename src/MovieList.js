import React from 'react';
import { Route,Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function MovieList({movies}) {
    
    return (
        <div className="container">
           {movies.map((e) =>(
           <div>
            <MovieCard movie={e} key={e.title}/>
            <Link to='/Description/{movie.id}'>  </Link>
          
            </div>
            ) )} 
            <Route path="/description/:id" render={props =>console.log(props)}></Route>
        </div>
    );
}
export default MovieList