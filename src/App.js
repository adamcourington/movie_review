import React from 'react';
import MovieList from './components/MovieList';
import movie1 from './images/movie1.jpeg';
import movie2 from './images/movie2.jpg';
import movie3 from './images/movie3.jpg';
import movie4 from './images/movie4.jpg';

const App = () => {
  const movies = [
    {
      id: '1',
      image: movie1,
      title: 'The Godfather',
      synopsis:
        'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
    },
    {
      id: '2',
      image: movie2,
      title: 'The Shawshank Redemption',
      synopsis:
        'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    },
    {
      id: '3',
      image: movie3,
      title: "Schindler's List",
      synopsis:
        'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    },
    {
      id: '4',
      image: movie4,
      title: 'Raging Bull',
      synopsis:
        'The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.',
    },
  ];
  return (
    <div>
      <MovieList items={movies} />
    </div>
  );
};

export default App;
