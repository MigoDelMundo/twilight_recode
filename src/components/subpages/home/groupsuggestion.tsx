import React, { useState } from "react";

interface GroupSuggestionProps {
  name: String;
  nameColor: String;
  totalMembers: String;
  activeMembers: String;
  groupDescription: String;
}

const GroupSuggestion = ({
  name,
  nameColor,
  totalMembers,
  activeMembers,
  groupDescription,
}: GroupSuggestionProps) => {
  const [clickJoin, setClickJoin] = useState(false);
  const toggleJoin = () => {
    setClickJoin(!clickJoin);
  };
  return (
    <>
      <div className="Groups-GridCell">
        <div className="Groups-Image" />
        <span className="Groups-Name">🌏 {name}</span>
        <br />
        <span className="Groups-Members">
          🧑‍🤝‍🧑 {totalMembers} total members, {activeMembers} active right now.
        </span>
        <br />
        <p className="Groups-Description">{groupDescription}</p>
        <div
          className={`JoinGroupButton ${clickJoin ? "Clicked" : ""}`}
          onClick={toggleJoin}
        >
          {clickJoin ? "Joined" : "Join"}
        </div>
      </div>
    </>
  );
};

export default GroupSuggestion;
