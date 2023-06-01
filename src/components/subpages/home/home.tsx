import React, { useState } from "react";
import Sidebar from "./homesidebar.tsx";

import Profile from "./profile.tsx";
import Feed from "./feed.tsx";
import Friends from "./friends.tsx";
import Groups from "./groups.tsx";
import Games from "./games.tsx";

function Home() {
  let content;

  const buttons = ["Feed", "Profile", "Friends", "Groups", "Games"];
  const [selectedPage, setSelectedPage] = useState(0);

  switch (selectedPage) {
    case 0:
      // console.log("Case 0");
      content = <Feed />;
      break;
    case 1:
      // console.log("Case 1");
      content = <Profile />;
      break;
    case 2:
      // console.log("Case 2");
      content = <Friends />;
      break;
    case 3:
      // console.log("Case 3");
      content = <Groups />;
      break;
    case 4:
      // console.log("Case 4");
      content = <Games />;
      break;
  }

  return (
    <>
      <div className="Subpage">
        <Sidebar
          buttons={buttons}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="Centerpage">{content}</div>
        <div className="ContactBar">
          <h3 className="ContactBar-TextHeader">🌱 Your Pages and Profiles</h3>
          <div className="ContactBar-Selection">
            Hollenfield Industries Website
          </div>
          <div className="ContactBar-Selection">Travel YouTube Channel</div>
          <div className="ContactBar-Selection">Business Instagram Page</div>
          <div className="ContactBar-Selection">Hollenfield Partnerships</div>
          <div className="ContactBar-Selection">Supplements and More</div>
        </div>
      </div>
    </>
  );
}

export default Home;
