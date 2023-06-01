import React from "react";
import { useState, useEffect } from "react";
import ConversationSelector from "./conversationselector";
import Toolbar from "./toolbar";
import MessagesHeader from "./messagesheader";
import MessagesData from "./messagesdata";
import ConversationContent from "./conversationcontent";
import sortedConversationNames from "./sortedconversationnames";
import RightColOptions from "./rightcoloptions";

const Messages = () => {
  const [selectedConvoIndex, setSelectedConvoIndex] = useState(-1);
  const sortedMessagesData = [...MessagesData].sort((a, b) => {
    const lastMessageA = a[a.length - 1];
    const lastMessageB = b[b.length - 1];
    return (
      new Date(lastMessageB.timestamp).getTime() -
      new Date(lastMessageA.timestamp).getTime()
    );
  });

  const selectedConversation = sortedMessagesData[selectedConvoIndex];

  let arrayWomen = ["Emily Hollenfield", "Amanda Francisco"];
  let interlocutorGender;

  if (arrayWomen.includes(sortedConversationNames[selectedConvoIndex])) {
    interlocutorGender = "Female";
    // console.log("female detected " + conversationName);
  } else {
    interlocutorGender = "Male";
    // console.log("male detected " + conversationName);
  }

  useEffect(() => {
    // Update conversation name when selectedConvoIndex changes
  }, [selectedConvoIndex]);

  const handleConversationClick = (index: number) => {
    setSelectedConvoIndex(index);
  };

  return (
    <>
      <div className="MessageColumn Left">
        <h3 className="Messages-ContactsHeaderText">💬 Chats</h3>
        <input
          type="search"
          id="searchChat"
          className="SearchConversation"
          placeholder="Search conversation"
        />
        {sortedMessagesData.map((conversation, index) => (
          <ConversationSelector
            key={index}
            conversation={conversation}
            selected={index === selectedConvoIndex}
            onClick={() => handleConversationClick(index)}
          />
        ))}
      </div>
      <div className="MessageColumn Center">
        <MessagesHeader
          conversationName={sortedConversationNames[selectedConvoIndex]}
        />
        <ConversationContent selectedConversation={selectedConversation} />
        <Toolbar />
      </div>
      <div className="MessageColumn Right">
        {selectedConversation && (
          <div
            className={`ConversationPicture Enlarged ${
              interlocutorGender === "Female" ? "Female" : "Male"
            }`}
          />
        )}
        <div className="ConversationNameRightCol">
          {sortedConversationNames[selectedConvoIndex]}
        </div>
        {selectedConversation && <RightColOptions />}
      </div>
    </>
  );
};

export default Messages;
