import React from "react";
import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
const StarRating = ({ rating }) => {
  const starList = [];
  const starFilledCount = Math.floor(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  const emptyStarCount = 5 - starFilledCount - (hasHalfStar ? 1 : 0);
  for (let i = 1; i <= starFilledCount; i++) {
    starList.push(<StarFill key={`star-fill + ${i}`} />);
  }
  if (hasHalfStar) {
    starList.push(<StarHalf key="start-half" />);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={`star-half + ${i}`} />);
  }
  return <div>{starList}</div>;
};

export default StarRating;
