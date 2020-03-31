import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Moment from "react-moment";

const Lyrics = props => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  //console.log(props);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}/videos?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US`
        // `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        let lyrics = res.data.results[0].key;
        console.log(lyrics);
        setLyrics(lyrics);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);
  const trailer = `https://www.youtube.com/embed/${lyrics}?autoplay=1`;
  console.log(trailer);
  if (lyrics === undefined || Object.keys(lyrics).length === 0) {
    return <Spinner />;
  } else {
    return (
      <>
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">{track.title}</h5>
          <div className="card-body">
            <iframe width="1000" height="500" src={trailer}></iframe>
          </div>
        </div>
      </>
    );
  }
};

export default Lyrics;
