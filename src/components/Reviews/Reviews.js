import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const getReviewsApi = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US&page=1`
    );
    return data;
  };

  const onArrayItems = async () => {
    const movieReview = await getReviewsApi();
    setReviews(movieReview.results);
  };

  console.log(reviews);

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {reviews.map(review => {
        <li>
          <p>{review.author}</p>
        </li>;
      })}
    </ul>
  );
};
