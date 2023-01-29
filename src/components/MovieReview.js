import React, { useState } from 'react';
import './MovieReview.css';
const MovieReview = () => {
  const [list, setList] = useState([]);
  const [review, setReview] = useState('');

  const addReview = (review) => {
    const newReview = {
      id: Math.random(),
      review: review,
    };
    setList([...list, newReview]);
  };
  const reviewHandler = (event) => {
    setReview(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addReview(review);
    setReview('');
  };
  return (
    <div>
      <div>
        {list.map((review) => (
          <div
            key={review.id}
            className="card__review mb-2 text-black bg-light "
          >
            <div className="card-body ">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="input">
            <textarea
              onChange={reviewHandler}
              value={review}
              rows="4"
              cols="50"
            ></textarea>

            <label className="label">Review Movie</label>
          </div>
          <div className="bt">
            <button className=" btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieReview;
