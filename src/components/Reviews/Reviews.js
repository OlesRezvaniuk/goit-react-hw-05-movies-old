import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsApi } from 'components/MoviesApi/MoviesApi';
import { ReviewsList } from './ReviewsList/ReviewsList';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  const onArrayItems = async () => {
    const movieReview = await getReviewsApi(id);
    setReviews(movieReview.results);
  };

  useEffect(() => {
    onArrayItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ReviewsList onReviews={reviews} />
    </>
  );
};

export default Reviews;
