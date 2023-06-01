import React from "react";

import MessageComposer from "./messagecomposer.tsx";
import FeedPostData from "./feedpostdata.tsx";
import FeedPost from "./feedpost.tsx";

const Feed = () => {
  return (
    <>
      <MessageComposer />
      <div>
        {FeedPostData.map((item, index) => (
          <FeedPost
            name={item.name}
            date={item.date}
            text={item.text}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Feed;
