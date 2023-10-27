import React from "react";
import TvShowListItem from "../TvShowListItem/TvShowListItem";
import "./style.css"
const TvShowList = ({ tvShowList,handleChangeTvShow }) => {
  return (
    <div>
      <div className="list-title">You'll probably like :</div>
      <div className="list">
        {tvShowList.map((show) => {
          return (
            <span className="tv-show-item" key={show.id}>
            <TvShowListItem tvShow={show} onClickItem={handleChangeTvShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TvShowList;
