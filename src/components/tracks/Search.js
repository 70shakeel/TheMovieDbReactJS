import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&query=${trackTitle}&page=1&include_adult=false`
      )
      .then(res => {
        let track_list = res.data.results;
        setState({ track_list: track_list, heading: "Search Results" });
      })
      .catch(err => console.log(err));
  }, [trackTitle]);

  const findTrack = e => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = e => {
    setUserInput(e.target.value);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-video" /> Search For A Movie
      </h1>
      <p className="lead text-center">Get the details for any movie</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Movie title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Get Movie Details
        </button>
      </form>
    </div>
  );
};

export default Search;
