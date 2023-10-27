import React from "react";
import "./style.css";
const SMALL_IMAGE_URL = "https://image.tmdb.org/t/p/w300";
const MAX_TITLE_LENGTH = 20;
const TvShowListItem = ({ tvShow, onClickItem }) => {
    function handleClick(){
        onClickItem(tvShow)
    }
  return (
    <div className="item-container" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img
        src={`${SMALL_IMAGE_URL}${tvShow.backdrop_path}`}
        alt={tvShow.name}
        className="image"
      />
      <div className="movie-name">
        {tvShow.name.length > MAX_TITLE_LENGTH
          ? tvShow.name.slice(0, MAX_TITLE_LENGTH) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

export default TvShowListItem;
