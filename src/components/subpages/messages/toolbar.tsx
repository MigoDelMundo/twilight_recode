import React from "react";

const Toolbar = () => {
  return (
    <>
      <div className="MessageColumn-Toolbar">
        <div className="MessageColumn-Toolbar-Box">🖼️ Image</div>
        <div className="MessageColumn-Toolbar-Box">🔍 Sticker</div>
        <div className="MessageColumn-Toolbar-Box">📺 GIF</div>
        <input type="text" className="MessageColumn-Toolbar-Box MessageBar" />
        <div className="MessageColumn-Toolbar-Box">📤 Send</div>
      </div>
    </>
  );
};

export default Toolbar;
