import React from "react";
import { getConversationName, setConversationName } from "./conversationutils";

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

interface ConversationSelectorProps {
  conversation: Message[];
  selected: boolean;
  onClick: () => void;
}

const ConversationSelector = ({
  conversation,
  selected,
  onClick,
}: ConversationSelectorProps) => {
  let interlocutorGender = "Unknown";

  for (let i = conversation.length - 1; i >= 0; i--) {
    const message = conversation[i];
    if (message.sender !== "Jake Hollenfield") {
      setConversationName(message.sender);
      break;
    }
  }

  let arrayWomen = ["Emily Hollenfield", "Amanda Francisco"];
  if (arrayWomen.includes(getConversationName())) {
    interlocutorGender = "Female";
    // console.log("female detected " + conversationName);
  } else {
    interlocutorGender = "Male";
    // console.log("male detected " + conversationName);
  }

  const lastMessage = conversation[conversation.length - 1];
  const lastMessageContent =
    lastMessage.sender === "Jake Hollenfield"
      ? `You: ${lastMessage.content}`
      : lastMessage.content;

  return (
    <div
      className={`ConversationSelector ${selected ? "Selected" : ""}`}
      onClick={onClick}
    >
      <div
        className={`ConversationPicture ${
          interlocutorGender == "Female" ? "Female" : "Male"
        }`}
      />
      <div className="ConversationSelector-Texts">
        <div className="Conversation-Name">{getConversationName()}</div>
        <p className="Last-Message">
          {lastMessageContent.length > 50
            ? `${lastMessageContent.slice(0, 50)}...`
            : lastMessageContent}
        </p>
        <span className="MessageDate">{`Sent: ${lastMessage.timestamp}`}</span>
      </div>
    </div>
  );
};

export default ConversationSelector;
