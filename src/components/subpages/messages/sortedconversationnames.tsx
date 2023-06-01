import React from "react";
import MessagesData from "./messagesdata";

const conversationNames = MessagesData.map((conversation) => {
  let lastNonJakeMessage = null;
  for (let i = conversation.length - 1; i >= 0; i--) {
    const message = conversation[i];
    if (message.sender !== "Jake Hollenfield") {
      lastNonJakeMessage = message;
      break;
    }
  }
  return lastNonJakeMessage ? lastNonJakeMessage.sender : "";
}).filter((name) => name !== "");

const sortedConversationNames = conversationNames.sort((nameA, nameB) => {
  const conversationA = MessagesData.find((conversation) =>
    conversation.some((message) => message.sender === nameA)
  );
  const conversationB = MessagesData.find((conversation) =>
    conversation.some((message) => message.sender === nameB)
  );
  const lastMessageA = conversationA
    ? conversationA[conversationA.length - 1]
    : null;
  const lastMessageB = conversationB
    ? conversationB[conversationB.length - 1]
    : null;
  if (!lastMessageA || !lastMessageB) {
    return 0;
  }
  return (
    new Date(lastMessageB.timestamp).getTime() -
    new Date(lastMessageA.timestamp).getTime()
  );
});

export default sortedConversationNames;
