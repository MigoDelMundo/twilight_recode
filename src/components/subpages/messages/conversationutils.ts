let conversationName = "";

export const setConversationName = (name: string) => {
  conversationName = name;
};

export const getConversationName = () => {
  return conversationName;
};
