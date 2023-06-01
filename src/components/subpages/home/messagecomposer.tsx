import React from "react";

const MessageComposer = () => {
  return (
    <>
      <div className="Centerpage-MessageComposer">
        <div className="ProfilePicture Gradient" />
        <input
          type="search"
          id="user-message-input"
          className="UserInputMessage"
          placeholder="Write your thoughts and post"
        />
        <div className="SendButton">Post</div>
      </div>
    </>
  );
};

export default MessageComposer;
