import React from "react";

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

interface ConversationContentProps {
  selectedConversation: Message[];
}

const ConversationContent = ({
  selectedConversation,
}: ConversationContentProps) => {
  let content;
  return (
    <div className="MessageColumn-ConversationContent">
      {selectedConversation ? (
        selectedConversation.map((item, index) => (
          <div
            key={`MessageMain-${item.sender}-${index}`}
            className={`MessageMain`}
          >
            <span
              key={`MessageSender-${item.sender}-${index}`}
              className={`MessageSender`}
            >
              {item.sender}
            </span>
            <span className="MessageAccessoryDetails"> sent on </span>
            <span
              key={`MessageTimestamp-${item.sender}-${index}`}
              className={`MessageTimestamp`}
            >
              {item.timestamp}
            </span>
            <br />
            <span
              key={`MessageContent-${item.sender}-${index}`}
              className={`MessageContent`}
            >
              {item.content}
            </span>
            <br />
          </div>
        ))
      ) : (
        <div className="MessageColumn-ConversationContent NoConversationSelected">
          <span>
            ⛔ No conversation selected. If you have any previous conversations,
            click on them on the left side column to see!
          </span>
        </div>
      )}
    </div>
  );
};

export default ConversationContent;
