import React from "react";

import GameOption from "./gameoption";
import GameOptionData from "./gameoptiondata";

const Games = () => {
  return (
    <>
      <div className="Games-Header">
        <h1>🕹️ Games 🕹️</h1>
        <p>
          Play the latest games by clicking 'Play' and scroll down to see their
          descriptions! (All games listed in here are all fictional and are
          unplayable as of the time being. Also, descriptions are scrollable!)
        </p>
      </div>
      <div className="Games-Grid">
        {GameOptionData.map((item, index) => (
          <GameOption
            gameTitle={item.gameTitle}
            gameDescription={item.gameDescription}
            gameGenre={item.gameGenre}
            key={`game-option-${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default Games;
