export const ReviewsList = ({ onReviews }) => {
  return (
    <ul>
      {onReviews.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
      {onReviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
