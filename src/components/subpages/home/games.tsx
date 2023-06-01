import React from "react";

import GameOption from "./gameoption";
import GameOptionData from "./gameoptiondata";

const Games = () => {
  return (
    <>
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
