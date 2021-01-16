import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';
import{Link} from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <div >
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={movie.image} width ='100' height ='300' />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.description}
                        </Card.Text>
                       
                        <Link to={`/description/${movie.title}`}><Button variant="primary">Description</Button></Link>
                        <div><StarRatingComponent name={movie.title} editing={true} value={movie.rate}/></div>
                        
                       
                    </Card.Body>
                </Card>
            

        </div>
    );
}
export default MovieCard;
