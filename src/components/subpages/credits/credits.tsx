import React from "react";
import ToggleModeDiv from "./togglemodediv";

const Credits = () => {
  return (
    <>
      <div className="CreditsMain">
        <p>
          <b>Credits</b>
          <br /> Credits to Programming with Mosh for initially teaching me how
          to program with React.js with his course. Highly recommend.
          <br /> Credits to ChatGPT for helping me with so much of the logic and
          errors that came up with the programming of this website. Helped me so
          much that it's insane. Also for the feed posts a majority of them came
          from ChatGPT with my ideas as a base
          <br /> Credits to Pexels as well because some pictures are owned by
          them
          <br /> Credits to you as well for reading this part of the website
          haha thanks
          <br />
          <br /> I don't know what else to put so I want to shoutout some other
          people. <br />
          <br />
          <br /> Oh, and also,
        </p>
        <ToggleModeDiv />
      </div>
    </>
  );
};

export default Credits;
