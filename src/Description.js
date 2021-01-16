
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

function Description({ movies, match }) {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        setMovie(
            movies.filter((el) => el.title === match.params.name)[0]
        );
    });
    return (
        <div className="col-4">
            <div style={{ textAlign: `center`, color: `white`, height: `300px` }} >
                {
                    movie && <div style={{ backgroundImage: ` linear-gradient(90deg, rgba(185,185,185,0.1) 0%, rgba(147,147,147,0.1) 100%) , url(\"${movie.image}\")` }} className="description">

                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                        <ReactPlayer
                            controls="true"
                            width='100'

                            url={movie.url} />

                    </div>

                }

            </div>


        </div>
    );
}

export default Description

