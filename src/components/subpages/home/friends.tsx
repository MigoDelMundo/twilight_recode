import React from "react";
import FriendSuggestion from "./friendsuggestion";
import FriendSuggestionData from "./friendsuggestiondata";

function Friends() {
  return (
    <>
      <div className="FriendsPage-MainBlock">
        <div className="FriendsPage-MainBlock-Background" />
        <div className="FriendsPage-MainBlock-Texts">
          <div className="FriendSuggestions-Title">
            🫂 Friends Suggestions 🫂
          </div>
          <p className="FriendSuggestion-Description">
            Welcome to the Friends page! Here you can add new friends to your
            network while also discovering new potential connections. Don't
            forget to personalize your friend requests with using your bio.
            Let's grow your network together!
          </p>
        </div>
      </div>
      <div className="FriendSuggestionsDiv">
        {FriendSuggestionData.map((item) => (
          <FriendSuggestion
            key={`FriendSuggestion-${item.name}`}
            name={item.name}
            location={item.location}
            gender={item.gender}
            age={item.age}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default Friends;
