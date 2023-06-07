import React from "react";

const MessageComposer = () => {
  return (
    <>
      <div className="Centerpage-MessageComposer">
        <h2>🌎 Tell the world what you think and feel...</h2>
        <div className="MessageComposer-Grid">
          <input
            type="search"
            id="user-message-input"
            className="UserInputMessage"
            placeholder="Write your thoughts and post"
          />
          <div className="SendButton">Post</div>
        </div>
        <div className="MessageComposer-AdditionalButtons">
          <div className="MessageComposer-AdditionalButton">🖼️ Image</div>
          <div className="MessageComposer-AdditionalButton">📂 File</div>
          <div className="MessageComposer-AdditionalButton">🔍 Sticker</div>
          <div className="MessageComposer-AdditionalButton">🔗 Link</div>
        </div>
      </div>
    </>
  );
};

export default MessageComposer;
