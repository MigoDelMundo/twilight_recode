import React from "react";

import FeedPost from "./feedpost";

const Profile = () => {
  const ProfileName = new String("Jake Arthur Hollenfield");
  const ProfilePosts = [
    {
      name: ProfileName,
      date: new Date("2023-05-07"),
      text: "Just climbed the highest peak in South America! The view was breathtaking 🏔️🌄 #adventuretime",
    },
    {
      name: ProfileName,
      date: new Date("2023-04-29"),
      text: "Just closed a seven-figure deal with a major tech company! Hard work pays off 💼💰 #entrepreneurship",
    },
    {
      name: ProfileName,
      date: new Date("2023-04-22"),
      text: "Tried a new workout routine today and my muscles are on fire 🔥🏋️‍♂️ #fitnessmotivation",
    },
    {
      name: ProfileName,
      date: new Date("2023-04-19"),
      text: "Just landed in Bali for some much-needed R&R 🏝️☀️ Excited for what's in store! #travelgoals",
    },
    {
      name: ProfileName,
      date: new Date("2023-04-16"),
      text: "Started writing my next book today - stay tuned for updates 📚🤓 #authorlife",
    },
    {
      name: ProfileName,
      date: new Date("2023-04-11"),
      text: "Had an amazing time speaking at a conference on real estate investing today 🗣️🏢 #publicspeaking",
    },
  ];
  return (
    <>
      <div className="ProfileWallpaper" />
      <div className="ProfilePicture Circle ProfileTab" />
      <div className="ProfileDescription">
        <div className="ProfileDescriptionName">{ProfileName}</div>
        <div className="ProfileDescriptionHandle">@_JakeHollenfield</div>
        <div className="ProfileDescriptionDescription">
          Jake Hollenfield: World traveler, successful entrepreneur, and fitness
          enthusiast. Always seeking adventure and pushing himself to new
          limits. Follow along for a glimpse into my exciting life! 🌎🏋️‍♂️💼✈️{" "}
        </div>
        <div className="ProfileDescriptionHobby">🌎 Travelling</div>
        <div className="ProfileDescriptionHobby">🏋️‍♂️ Weightlifting</div>
        <div className="ProfileDescriptionHobby">🤵 Entrepreneur</div>
        <div className="ProfileDescriptionHobby">✍ Author</div>
        <div className="ProfileDescriptionHobby">👨‍👩‍👦 Father</div>
        <div className="ProfileDescriptionHobby">🏢 Real Estate</div>
        <div className="ProfileDescriptionHobby">🗣 Public Speaker</div>
        <div className="ProfileDescriptionHobby">📈 Investor</div>
      </div>
      {ProfilePosts.map((item) => (
        <FeedPost
          key={`ProfilePost-${item.date}`}
          name={item.name}
          date={item.date}
          text={item.text}
        />
      ))}
    </>
  );
};

export default Profile;
