import './Movie.css';
import './MovieReview';
import MovieReview from './MovieReview';

const Movie = (props) => {
  return (
    <>
      <div className="col-8 mx-auto">
        <div className="card  text-white bg-dark ">
          <div className="card-img-top text-center">
            <img src={props.image} alt="The GodFather"></img>
          </div>

          <div className="card-body">
            <div className='"card-title'>
              <h2>{props.title}</h2>
            </div>
            <div className="card-text">
              <p>{props.synopsis}</p>
            </div>
          </div>
          <div>
            <MovieReview />
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default Movie;
