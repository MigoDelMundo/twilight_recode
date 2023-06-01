import React, { useState } from "react";

interface FriendSuggestionProps {
  name: String;
  location: String;
  gender: String;
  age: String;
  description: String;
}

const FriendSuggestion = ({
  name,
  location,
  gender,
  age,
  description,
}: FriendSuggestionProps) => {
  const [isAdd, setIsAdd] = useState(false);
  const toggleAdd = () => {
    setIsAdd(!isAdd);
  };
  const genderClass =
    gender.toLocaleLowerCase() === "female"
      ? "ProfilePicture FriendSuggestion DefaultFemale"
      : "ProfilePicture FriendSuggestion DefaultMale";
  return (
    <>
      <div className="FriendSuggestion">
        <div className={genderClass} />
        <h3 className="FS-Name">{name}</h3>
        <span className="FS-Loc">📌 {location}</span>
        <p className="FS-Desc">
          <span className="FS-AgeGender">
            {gender}, {age} years old.{" "}
          </span>
          Bio:{" "}
          {description.length > 65
            ? `${description.slice(0, 65)}...`
            : description}
        </p>
        <div
          className={`AddFriendSuggestion ${isAdd ? "Clicked" : ""}`}
          onClick={toggleAdd}
        >
          {isAdd ? "Added" : "Add"}
        </div>
      </div>
    </>
  );
};

export default FriendSuggestion;
