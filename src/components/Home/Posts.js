import React from "react";
import moment from "moment";

const Posts = ({ date, pfpHash, postHash, message, userName }) => {
  return (
    <div className="posts_card">
      <div className="poster_img">
        <img
          src={`https://ipfs.io/ipfs/${pfpHash}`}
          alt={userName}
          loading="lazy"
        />
      </div>

      <div className="details_section ml-3">
        <div className="username d-flex align-items-center flex-row">
          <p>{userName}</p>
          <span className="ml-2">
            {moment(new Date(date * 1000), "YYYYMMDD").fromNow()}
          </span>
        </div>
        <div className="message">
          <span>{message}</span>
        </div>
        <div className="post_img mt-4 d-flex justify-content-start">
          <img
            src={`https://ipfs.io/ipfs/${postHash}`}
            alt={postHash}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
