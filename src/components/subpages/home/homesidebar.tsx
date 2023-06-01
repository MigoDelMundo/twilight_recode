import React from "react";

interface SidebarProps {
  buttons: String[];
  selectedPage: Number;
  setSelectedPage: Function;
}

const Sidebar = ({ buttons, selectedPage, setSelectedPage }: SidebarProps) => {
  // const buttonKeys = buttons.map(() => uuidv4());

  return (
    <>
      <div className="Sidebar">
        <div className="SidebarTitle">
          <h3>🗺️ Navigation</h3>
        </div>
        {buttons.map((name, index) => (
          <div
            className={
              selectedPage === index
                ? "Sidebar-Button-Selected"
                : "Sidebar-Button"
            }
            key={`buttonKey-${index}`}
            onClick={() => setSelectedPage(index)}
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
