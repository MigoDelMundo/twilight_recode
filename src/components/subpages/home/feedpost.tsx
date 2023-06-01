import React, { useState } from "react";

interface FeedPostProps {
  name: String;
  date: Date;
  text: String;
}

const FeedPost = ({ name, date, text }: FeedPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  const handleShare = () => {
    setIsShared(!isShared);
  };

  if (name === null) {
    name = "A BaceFook User";
  }
  if (date === null) {
    date = new Date(2018, 4, 24, 8, 43, 49, 876);
  }
  if (text === null || text === "") {
    text = "This user has not submitted his or her text.";
  }
  return (
    <div className="FeedPost">
      <div className="DefaultPicture" />
      <span className="FeedPost-PosterInfo">
        {name}, {date.toLocaleDateString()}
      </span>
      <br />
      <p className="FeedPost-Paragraph">{text}</p>
      {/* <div className="PostPictureSlot" /> */}
      <div className="ActionBar">
        <div
          className={`FeedPost-Button ${isLiked ? "Clicked" : ""}`}
          onClick={handleLike}
        >
          {isLiked ? "Liked" : "Like"}
        </div>
        <div className="FeedPost-Button">Comment</div>
        <div
          className={`FeedPost-Button ${isShared ? "Clicked" : ""}`}
          onClick={handleShare}
        >
          {isShared ? "Shared" : "Share"}
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
