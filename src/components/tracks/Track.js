import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { track } = props;
  let poster = `https://image.tmdb.org/t/p/w500${track.poster_path}`;

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.title}</h5>

          <p className="card-text">
            <img
              //className="img-responsive"
              src={poster}
              // height="460"
              // width="345"
              // align="right"
              display="block"
              margin-left="auto"
              margin-right="auto"
              width="95%"
            ></img>
            <br />
            <strong>
              <i className="fas fa-film" /> Overview
            </strong>
            : {track.overview}
            <Link
              to={`lyrics/track/${track.id}`}
              className="container btn btn-dark btn-block"
              align="middle"
            >
              <i className="fas fa-chevron-right" /> Watch Tutorial
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Track;
