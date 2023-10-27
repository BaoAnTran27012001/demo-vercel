import axios from "axios";
const BASE_URL = `https://api.themoviedb.org/3/`;
const tvshowUrlPopulars = `https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&api_key=ec5bce0719395b6371af9c1a19492ad3`;

export class TvShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(tvshowUrlPopulars);
    return response.data.results;
  }
  static async fetchRecommends(tvShowId) {
    const response = await axios.get(
      BASE_URL +
        `tv/${tvShowId}/recommendations?api_key=ec5bce0719395b6371af9c1a19492ad3`
    );
    return response.data.results;
  }
  static async fetchByTitle(queryString) {
    const response = await axios.get(
      BASE_URL +
        `search/tv?query=${queryString}&api_key=ec5bce0719395b6371af9c1a19492ad3`
    );
    return response.data.results;
  }

  //
}
