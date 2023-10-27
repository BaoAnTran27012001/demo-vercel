import React, { useEffect, useState } from "react";
import "./App.css";
import { TvShowAPI } from "../api/tv-shows";
import TvShowDetail from "./TvShowDetail/TvShowDetail";
import logoImg from "../assets/images/logo.png";
import Logo from "./Logo/Logo";
import TvShowList from "./TvShowList/TvShowList";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendTvShowList, setRecommendTvShowList] = useState([]);

  function updateCurrentTvShow(show) {
    setCurrentTvShow(show);
  }
  useEffect(() => {
    async function fetchPopularTVShow() {
      const popularTvShowList = await TvShowAPI.fetchPopulars();
      if (popularTvShowList.length > 0) {
        setCurrentTvShow(popularTvShowList[6]);
      }
    }
    fetchPopularTVShow();
  }, []);

  useEffect(() => {
    async function fetchRecommendTVShow() {
      const recommendTvShowListResp = await TvShowAPI.fetchRecommends(
        currentTvShow.id
      );
      if (recommendTvShowListResp.length > 0) {
        setRecommendTvShowList(recommendTvShowListResp.slice(0, 10));
      }
    }
    if (currentTvShow) {
      fetchRecommendTVShow();
    }
  }, [currentTvShow]);

  async function fetchBySearch(title) {
    const searchedListResp = await TvShowAPI.fetchByTitle(title);
    if (searchedListResp.length > 0) {
      setCurrentTvShow(searchedListResp[0]);
    }
  }
  const bodyStyle = {
    background: currentTvShow
      ? `linear-gradient(to bottom right,rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("https://image.tmdb.org/t/p/original${currentTvShow.backdrop_path}")`
      : "black",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="main_container" style={bodyStyle}>
      <div className="header">
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title={"Wattowatch"}
              subtitle={"Find a show you may like"}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar handleSearchTvShow={fetchBySearch} />
          </div>
        </div>
      </div>
      <div className="tv_show_detail">
        {currentTvShow && <TvShowDetail currentTvShow={currentTvShow} />}
      </div>
      <div className="recommended_tv_shows">
        {currentTvShow && (
          <TvShowList
            tvShowList={recommendTvShowList}
            handleChangeTvShow={updateCurrentTvShow}
          />
        )}
      </div>
    </div>
  );
};

export default App;
