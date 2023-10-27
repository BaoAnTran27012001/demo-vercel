import React from "react";
import "./style.css";
import StarRating from "../StarRating/StarRating";
const TvShowDetail = ({ currentTvShow }) => {
  const rating = currentTvShow.vote_average / 2;
  return (
    <div className="detail-container">
      <div className="title">{currentTvShow.name}</div>
      <div className="rating_container">
        <StarRating rating={rating} />
        <div className="rating">{rating}/5</div>
      </div>
      <div className="overview">{currentTvShow.overview}</div>
    </div>
  );
};

export default TvShowDetail;
