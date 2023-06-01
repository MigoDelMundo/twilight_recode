import React from "react";

interface HeaderProps {
  selectedSubpage: number;
  setSelectedSubpage: Function;
}

function Header({ selectedSubpage, setSelectedSubpage }: HeaderProps) {
  let headerButtons = ["Home", "Messages", "Credits"];

  return (
    <>
      <div className="Header">
        <h2 className="HeaderTitle">🌙 Twilight</h2>
        {headerButtons.length === 0 && <span>No item found!</span>}
        {headerButtons.map((name, index) => (
          <div
            className={
              selectedSubpage === index
                ? "Header-Button Selected"
                : "Header-Button"
            }
            key={`header-button-${index}`}
            onClick={() => {
              setSelectedSubpage(index);
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;
