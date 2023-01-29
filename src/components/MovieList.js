import React from 'react';
import './MovieList.css';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <div className="movies">
      <Movie
        title={props.items[0].title}
        synopsis={props.items[0].synopsis}
        image={props.items[0].image}
      />
      <br />
      <Movie
        title={props.items[1].title}
        synopsis={props.items[1].synopsis}
        image={props.items[1].image}
      />
      <br />

      <Movie
        title={props.items[2].title}
        synopsis={props.items[2].synopsis}
        image={props.items[2].image}
      />
      <br />

      <Movie
        title={props.items[3].title}
        synopsis={props.items[3].synopsis}
        image={props.items[3].image}
      />
    </div>
  );
};

export default MovieList;
