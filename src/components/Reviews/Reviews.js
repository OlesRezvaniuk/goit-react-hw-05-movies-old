import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

export const Reviews = () => {
  const { id } = useParams();
  console.log(id);
  return <div>Reviews</div>;
};
