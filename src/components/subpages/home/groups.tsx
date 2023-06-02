import React from "react";

import GroupSuggestion from "./groupsuggestion";
import GroupSuggestionData from "./groupsuggestiondata";

function Groups() {
  return (
    <>
      <div className="Groups-HeaderBlock">
        <div className="Groups-GroupPhoto" />
        <div className="Groups-GroupText"></div>
        <div className="Groups-HeaderTitle">🛞 Group Pages 🛞</div>
        <p className="Groups-HeaderDesc">
          Here, you can easily find and join new groups that align with your
          interests and hobbies. Whether you're looking to connect with other
          fans of a particular TV show, discuss the latest trends in fashion, or
          just share your love of cooking with like-minded individuals, our
          group page has something for everyone.
        </p>
      </div>
      <div className="Groups-Grid">
        {GroupSuggestionData.map((item) => (
          <GroupSuggestion
            key={`GroupSuggestion-${item.name}`}
            name={item.name}
            nameColor={item.nameColor}
            totalMembers={item.totalMembers}
            activeMembers={item.activeMembers}
            groupDescription={item.groupDescription}
          />
        ))}
      </div>
    </>
  );
}

export default Groups;
