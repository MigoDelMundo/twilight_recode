import React from "react";

interface MessagesHeaderProps {
  conversationName: string;
}

const MessagesHeader = ({ conversationName }: MessagesHeaderProps) => {
  return (
    <>
      <div className="MessageColumn-Header">
        <div className="MessageColumn-Header-Information">
          👤 {conversationName ? conversationName : "No conversation loaded"}
        </div>
      </div>
    </>
  );
};

export default MessagesHeader;
