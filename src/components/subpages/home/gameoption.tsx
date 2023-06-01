import React from "react";

interface GameOptionProps {
  gameTitle: String;
  gameDescription: String;
  gameGenre: String;
}

const GameOption = ({
  gameTitle,
  gameDescription,
  gameGenre,
}: GameOptionProps) => {
  return (
    <>
      <div className="Games-GridCell">
        <div className={`Game-Image ${gameGenre}`} />
        <div className="Game-Texts">
          <div className="PlayGame">Play</div>
          <span className="Title">🎮 {gameTitle}</span>
          <p className="Description">
            {gameDescription.length > 120
              ? `${gameDescription.slice(0, 120)}...`
              : gameDescription}
          </p>
        </div>
      </div>
    </>
  );
};

export default GameOption;
