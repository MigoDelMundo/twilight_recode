import React from "react";
import Home from "./subpages/home/home";
import Messages from "./subpages/messages/messages";
import Credits from "./subpages/credits/credits";

interface SubpageSlotProps {
  selectedSubpage: number;
}

function SubpageSlot({ selectedSubpage }: SubpageSlotProps) {
  let content;

  switch (selectedSubpage) {
    case 0:
      content = <Home />;
      break;
    case 1:
      content = <Messages />;
      break;
    case 2:
      content = <Credits />;
      break;
  }
  return (
    <>
      <div className="SubpageSlot">{content}</div>
    </>
  );
}

export default SubpageSlot;
